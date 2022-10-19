import * as core from '@actions/core'
import * as glob from '@actions/glob'
import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'
import * as semver from 'semver'
import * as opts from '../../opts'
import * as util from '../../util'

export const name = 'cabal'

export async function build(
  sourceDir: string,
  installDir: string,
  options: opts.BuildOptions
): Promise<void> {
  const execOptions: util.ExecOptions = {cwd: sourceDir}
  // Configure:
  core.info(`Configure Agda-${options['agda-version']}`)
  await util.cabal(['v2-configure', ...buildFlags(options)], execOptions)
  // Build:
  core.info(`Build Agda-${options['agda-version']}`)
  await util.cabal(['v2-build', 'exe:agda', 'exe:agda-mode'], execOptions)
  // Install:
  core.info(`Install Agda-${options['agda-version']} to ${installDir}`)
  await util.mkdirP(path.join(installDir, 'bin'))
  await util.cabal(
    [
      'v2-install',
      'exe:agda',
      'exe:agda-mode',
      '--install-method=copy',
      `--installdir=${path.join(installDir, 'bin')}`
    ],
    execOptions
  )
}

function buildFlags(options: opts.BuildOptions): string[] {
  // NOTE:
  //   We set the build flags following Agda's deploy workflow, which builds
  //   the nightly distributions, except that we disable --cluster-counting
  //   for all builds. See:
  //   https://github.com/agda/agda/blob/d5b5d90a3e34cf8cbae838bc20e94b74a20fea9c/src/github/workflows/deploy.yml#L37-L47
  const flags: string[] = []
  // Disable profiling:
  flags.push('--disable-executable-profiling')
  flags.push('--disable-library-profiling')
  // If supported, pass Agda flag --cluster-counting
  if (
    !options['force-no-cluster-counting'] &&
    opts.supportsClusterCounting(options)
  ) {
    flags.push('--flags=+enable-cluster-counting')
    // NOTE:
    //   Agda versions 2.5.3 - 2.6.2 depend on text-icu ^0.7, but
    //   versions 0.7.0.0 - 0.7.1.0 do not compile with icu68+:
    if (util.simver.lte(options['agda-version'], '2.6.2')) {
      flags.push('--allow-newer=text-icu')
      flags.push('--constraint=text-icu>=0.7.1.0')
    }
  }
  // Fix EdisonCore dependency for Agda 2.5.2:
  if (util.simver.eq(options['agda-version'], '2.5.2')) {
    flags.push('--allow-newer=EdisonCore')
    flags.push('--constraint=EdisonCore==1.3.3')
  }
  // If supported, pass Agda flag --optimise-heavily
  if (opts.supportsOptimiseHeavily(options)) {
    flags.push('--flags=+optimise-heavily')
  }
  // If supported, set --split-sections.
  if (opts.supportsSplitSections(options)) {
    flags.push('--enable-split-sections')
  }
  // Add extra-{include,lib}-dirs:
  for (const includeDir of options['extra-include-dirs']) {
    flags.push(`--extra-include-dirs=${includeDir}`)
  }
  for (const libDir of options['extra-lib-dirs']) {
    flags.push(`--extra-lib-dirs=${libDir}`)
  }
  return flags
}

export async function supportedGhcVersions(
  sourceDir: string
): Promise<string[]> {
  const versions: string[] = []
  const cabalFilePath = await findCabalFile(sourceDir)
  const cabalFileContents = fs.readFileSync(cabalFilePath).toString()
  for (const match of cabalFileContents.matchAll(
    /GHC == (?<version>\d+\.\d+\.\d+)/g
  )) {
    if (match.groups !== undefined) {
      if (semver.valid(match.groups.version) !== null) {
        versions.push(match.groups.version)
      } else {
        core.warning(
          `Could not parse GHC version '${match.groups.version}' in: ${cabalFilePath}`
        )
      }
    }
  }
  if (versions.length === 0) {
    throw Error(
      [
        `Could not determine supported GHC versions for building with Cabal:`,
        `${path.basename(cabalFilePath)} does not sepecify 'tested-with'.`
      ].join(os.EOL)
    )
  } else {
    return versions
  }
}

async function findCabalFile(sourceDir: string): Promise<string> {
  const cabalFileGlobber = await glob.create(path.join(sourceDir, '*.cabal'), {
    followSymbolicLinks: false,
    implicitDescendants: false,
    matchDirectories: false
  })
  const cabalFilePaths = await cabalFileGlobber.glob()
  if (cabalFilePaths.length !== 1) {
    throw Error(
      [
        `Found multiple .cabal files:`,
        ...cabalFilePaths.map(cabalFilePath => `- ${cabalFilePath}`)
      ].join(os.EOL)
    )
  } else {
    return cabalFilePaths[0]
  }
}