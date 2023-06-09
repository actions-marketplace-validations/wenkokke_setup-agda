import os from 'node:os'
import exec, { ExecOptions } from '../exec.js'

export default async function otool(
  args: string[],
  options?: ExecOptions
): Promise<string> {
  const { stdout } = await exec('otool', args, options)
  return stdout
}

otool.getSharedLibraries = async (
  target: string,
  options?: ExecOptions
): Promise<string[]> => {
  const output = await otool(['-L', target], options)
  const outputLines = output.split(/\r?\n/g)
  // Drop the first line:
  const firstLine = outputLines.shift()?.trim()
  if (firstLine !== `${target}:`) {
    logger.warning(
      `Could not parse the output of 'otool -L':${os.EOL}${output}`
    )
  }
  return outputLines.map((line) => line.trimStart().split(/\s+/, 2)[0])
}
