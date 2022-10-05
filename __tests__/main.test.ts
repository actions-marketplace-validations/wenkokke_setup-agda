import {test, expect} from '@jest/globals'

test('vacuous test', async () => {
  expect(null).toBeNull()
})

const sampleAgdaCabal = `
name:            Agda
version:         2.6.2.2
x-revision: 2
cabal-version:   >= 1.10
build-type:      Custom
license:         OtherLicense
license-file:    LICENSE
copyright:       (c) 2005-2022 The Agda Team.
author:          Ulf Norell and The Agda Team, see https://agda.readthedocs.io/en/latest/team.html
maintainer:      The Agda Team
homepage:        http://wiki.portal.chalmers.se/agda/
bug-reports:     https://github.com/agda/agda/issues
category:        Dependent types
synopsis:        A dependently typed functional programming language and proof assistant
description:
  Agda is a dependently typed functional programming language: It has
  inductive families, which are similar to Haskell's GADTs, but they
  can be indexed by values and not just types. It also has
  parameterised modules, mixfix operators, Unicode characters, and an
  interactive Emacs interface (the type checker can assist in the
  development of your code).
  .
  Agda is also a proof assistant: It is an interactive system for
  writing and checking proofs. Agda is based on intuitionistic type
  theory, a foundational system for constructive mathematics developed
  by the Swedish logician Per Martin-L&#xf6;f. It has many
  similarities with other proof assistants based on dependent types,
  such as Coq, Idris, Lean and NuPRL.
  .
  This package includes both a command-line program (agda) and an
  Emacs mode. If you want to use the Emacs mode you can set it up by
  running @agda-mode setup@ (see the README).
  .
  Note that the Agda package does not follow the package versioning
  policy, because it is not intended to be used by third-party
  packages.

tested-with:        GHC == 8.0.2
                    GHC == 8.2.2
                    GHC == 8.4.4
                    GHC == 8.6.5
                    GHC == 8.8.4
                    GHC == 8.10.7
                    GHC == 9.0.2
                    GHC == 9.2.4
                    GHC == 9.4.1

extra-source-files: CHANGELOG.md
                    README.md
                    doc/release-notes/2.6.2.1.md
                    doc/release-notes/2.6.2.md
                    doc/release-notes/2.6.1.3.md
                    doc/release-notes/2.6.1.2.md
                    doc/release-notes/2.6.1.1.md
                    doc/release-notes/2.6.1.md
                    doc/release-notes/2.6.0.1.md
                    doc/release-notes/2.6.0.md
                    doc/release-notes/2.5.4.2.md
                    doc/release-notes/2.5.4.1.md
                    doc/release-notes/2.5.4.md
                    doc/release-notes/2.5.3.md
                    doc/release-notes/2.5.2.md
                    doc/release-notes/2.5.1.2.md
                    doc/release-notes/2.5.1.1.md
                    doc/release-notes/2.5.1.md
                    doc/release-notes/2.4.2.5.md
                    doc/release-notes/2.4.2.4.md
                    doc/release-notes/2.4.2.3.md
                    doc/release-notes/2.4.2.2.md
                    doc/release-notes/2.4.2.1.md
                    doc/release-notes/2.4.2.md
                    doc/release-notes/2.4.0.2.md
                    doc/release-notes/2.4.0.1.md
                    doc/release-notes/2.4.0.md
                    doc/release-notes/2.3.2.2.md
                    doc/release-notes/2.3.2.1.md
                    doc/release-notes/2.3.2.md
                    doc/release-notes/2.3.0.md
                    doc/release-notes/2.2.10.md
                    doc/release-notes/2.2.8.md
                    doc/release-notes/2.2.6.md
                    doc/release-notes/2.2.2.md
                    doc/release-notes/2.2.4.md
                    doc/release-notes/2.2.0.md
-- Liang-Ting (2019-11-26): See Issues #4216
--                    doc/user-manual.pdf
                    stack-8.0.2.yaml
                    stack-8.2.2.yaml
                    stack-8.4.4.yaml
                    stack-8.6.5.yaml
                    stack-8.8.4.yaml
                    stack-8.10.7.yaml
                    stack-9.0.1.yaml
                    stack-9.0.2.yaml
                    stack-9.2.1.yaml
                    stack-9.2.2.yaml

data-dir:           src/data
data-files:         emacs-mode/*.el
                    html/Agda.css
                    html/highlight-hover.js
                    JS/agda-rts.js
                    latex/agda.sty
                    latex/postprocess-latex.pl
                    lib/prim/Agda/Builtin/Bool.agda
                    lib/prim/Agda/Builtin/Char.agda
                    lib/prim/Agda/Builtin/Char/Properties.agda
                    lib/prim/Agda/Builtin/Coinduction.agda
                    lib/prim/Agda/Builtin/Cubical/Path.agda
                    lib/prim/Agda/Builtin/Cubical/Id.agda
                    lib/prim/Agda/Builtin/Cubical/Sub.agda
                    lib/prim/Agda/Builtin/Cubical/Glue.agda
                    lib/prim/Agda/Builtin/Cubical/HCompU.agda
                    lib/prim/Agda/Builtin/Equality.agda
                    lib/prim/Agda/Builtin/Equality/Erase.agda
                    lib/prim/Agda/Builtin/Equality/Rewrite.agda
                    lib/prim/Agda/Builtin/Float.agda
                    lib/prim/Agda/Builtin/Float/Properties.agda
                    lib/prim/Agda/Builtin/FromNat.agda
                    lib/prim/Agda/Builtin/FromNeg.agda
                    lib/prim/Agda/Builtin/FromString.agda
                    lib/prim/Agda/Builtin/IO.agda
                    lib/prim/Agda/Builtin/Int.agda
                    lib/prim/Agda/Builtin/List.agda
                    lib/prim/Agda/Builtin/Maybe.agda
                    lib/prim/Agda/Builtin/Nat.agda
                    lib/prim/Agda/Builtin/Reflection.agda
                    lib/prim/Agda/Builtin/Reflection/External.agda
                    lib/prim/Agda/Builtin/Reflection/Properties.agda
                    lib/prim/Agda/Builtin/Sigma.agda
                    lib/prim/Agda/Builtin/Size.agda
                    lib/prim/Agda/Builtin/Strict.agda
                    lib/prim/Agda/Builtin/String.agda
                    lib/prim/Agda/Builtin/String/Properties.agda
                    lib/prim/Agda/Builtin/TrustMe.agda
                    lib/prim/Agda/Builtin/Unit.agda
                    lib/prim/Agda/Builtin/Word.agda
                    lib/prim/Agda/Builtin/Word/Properties.agda
                    lib/prim/Agda/Primitive.agda
                    lib/prim/Agda/Primitive/Cubical.agda
                    MAlonzo/src/MAlonzo/*.hs
                    MAlonzo/src/MAlonzo/RTE/*.hs

source-repository head
  type:     git
  location: https://github.com/agda/agda.git

source-repository this
  type:     git
  location: https://github.com/agda/agda.git
  tag:      v2.6.2.2

flag cpphs
  default:     False
  manual:      True
  description: Use cpphs instead of cpp.

flag debug
  default: False
  manual: True
  description:
    Enable debugging features that may slow Agda down.

flag enable-cluster-counting
  default: False
  description:
    Enable the --count-clusters flag. (If enable-cluster-counting is
    False, then the --count-clusters flag triggers an error message.)

flag optimise-heavily
  default: False
  description:
    Enable some expensive optimisations when compiling Agda.

custom-setup
  setup-depends:  base >= 4.9.0.0 && < 4.18
                , Cabal >= 1.24.0.0 && < 3.9
                , directory >= 1.2.6.2 && < 1.4
                , filepath >= 1.4.1.0 && < 1.5
                , process >= 1.4.2.0 && < 1.7

library
  hs-source-dirs:   src/full

  if flag(cpphs)
    -- We don't write an upper bound for cpphs because the
    -- \`build-tools\` field can not be modified in Hackage.

    build-tools: cpphs >= 1.20.9
    ghc-options: -pgmP cpphs -optP --cpp

  if flag(debug)
    cpp-options:    -DDEBUG

  if flag(enable-cluster-counting)
    cpp-options:    -DCOUNT_CLUSTERS
    build-depends:  text-icu >= 0.7.1.0

  if os(windows)
    build-depends:  Win32 >= 2.3.1.1 && < 2.13

  -- Agda cannot be built with GHC 8.6.1 due to a compiler bug, see
  -- Agda Issue #3344.
  if impl(ghc == 8.6.1)
    buildable: False

  -- Agda cannot be built with Windows and GHC 8.6.3 due to a compiler
  -- bug, see Agda Issue #3657.
  if os(windows) && impl(ghc == 8.6.3)
    buildable: False

  build-depends:  aeson >= 1.1.2.0 && < 2.2
                , array >= 0.5.1.1 && < 0.6
                , async >= 2.2 && < 2.3
                , base >= 4.9.0.0 && < 4.18
                , binary >= 0.8.3.0 && < 0.9
                , blaze-html >= 0.8 && < 0.10
                , boxes >= 0.1.3 && < 0.2
                , bytestring >= 0.10.8.1 && < 0.12
                , case-insensitive >= 1.2.0.4 && < 1.3
                -- containers-0.5.11.0 is the first to contain IntSet.intersection
                , containers >= 0.5.11.0 && < 0.7
                , data-hash >= 0.2.0.0 && < 0.3
                , deepseq >= 1.4.2.0 && < 1.5
                , directory >= 1.2.6.2 && < 1.4
                , edit-distance >= 0.2.1.2 && < 0.3
                , equivalence >= 0.3.2 && < 0.5
                -- exceptions-0.8 instead of 0.10 because of stack
                , exceptions >= 0.8 && < 0.11
                , filepath >= 1.4.1.0 && < 1.5
                , gitrev >= 1.3.1 && < 2.0
                -- hashable 1.2.0.10 makes library-test 10x
                -- slower. The issue was fixed in hashable 1.2.1.0.
                -- https://github.com/tibbe/hashable/issues/57.
                , hashable >= 1.2.1.0 && < 1.5
                -- There is a "serious bug"
                -- (https://hackage.haskell.org/package/hashtables-1.2.0.2/changelog)
                -- in hashtables 1.2.0.0/1.2.0.1. This bug seems to
                -- have made Agda much slower (infinitely slower?) in
                -- some cases.
                , hashtables >= 1.2.0.2 && < 1.4
                , haskeline >= 0.7.2.3 && < 0.9
                -- monad-control-1.0.1.0 is the first to contain liftThrough
                , monad-control >= 1.0.1.0 && < 1.1
                -- mtl >= 2.2 && < 2.2.1 doesn't export Control.Monad.Except.
                -- Need mtl 2.2.2  for export of Control.Monad.IdentityT (ghc 8.2.2+)
                , mtl >= 2.2.1 && < 2.4
                , murmur-hash >= 0.1 && < 0.2
                , parallel >= 3.2.2.0 && < 3.3
                , pretty >= 1.1.3.3 && < 1.2
                , process >= 1.4.2.0 && < 1.7
                , regex-tdfa >= 1.3.1.0 && < 1.4
                , split >= 0.2.0.0 && < 0.2.4
                , stm >= 2.4.4 && < 2.6
                , strict >= 0.3.2 && < 0.5
                , template-haskell >= 2.11.0.0 && < 2.20
                , text >= 1.2.3.0 && < 2.1
                , time >= 1.6.0.1 && < 1.13
                , transformers >= 0.5 && < 0.7
                , unordered-containers >= 0.2.5.0 && < 0.3
                , uri-encode >= 1.5.0.4 && < 1.6
                , zlib == 0.6.*

  -- Andreas, 2022-02-02, issue #5659:
  -- Build failure with transformers-0.6.0.{0,1,2} and GHC 8.6.
  -- Transformers-0.6.0.3 might restored GHC 8.6 buildability.
  if impl(ghc == 8.6.*)
    build-depends: transformers < 0.6 || >= 0.6.0.3

  -- Andreas, 2021-03-10:
  -- All packages we depend upon should be mentioned in an unconditional
  -- build-depends field, but additional restrictions on their
  -- version for specific GHCs may be placed in conditionals.
  --
  -- The goal is to be able to make (e.g. when a new GHC comes out)
  -- revisions on hackage, e.g. relaxing upper bounds.  This process
  -- currently does not support revising conditionals.

  -- ASR (2018-10-16).
  -- text-1.2.3.0 required for supporting GHC 8.4.1, 8.4.2 and
  -- 8.4.3. See Issue #3277.
  -- The other GHC versions can be restricted to >= 1.2.3.1.
  if impl(ghc < 8.4.1) || impl(ghc > 8.4.3)
    build-depends: text >= 1.2.3.1

  if impl(ghc >= 8.4)
    build-depends: ghc-compact == 0.1.*

  -- We don't write upper bounds for Alex nor Happy because the
  -- \`build-tools\` field can not be modified in Hackage. Agda doesn't
  -- build with Alex 3.2.0 and segfaults with 3.2.2.
  build-tools:  alex >= 3.1.0 && < 3.2.0 || == 3.2.1 || >= 3.2.3
              , happy >= 1.19.4

  exposed-modules:  Agda.Auto.Auto
                    Agda.Auto.Options
                    Agda.Auto.CaseSplit
                    Agda.Auto.Convert
                    Agda.Auto.NarrowingSearch
                    Agda.Auto.SearchControl
                    Agda.Auto.Syntax
                    Agda.Auto.Typecheck
                    Agda.Benchmarking
                    Agda.Compiler.Backend
                    Agda.Compiler.Builtin
                    Agda.Compiler.CallCompiler
                    Agda.Compiler.Common
                    Agda.Compiler.JS.Compiler
                    Agda.Compiler.JS.Syntax
                    Agda.Compiler.JS.Substitution
                    Agda.Compiler.JS.Pretty
                    Agda.Compiler.MAlonzo.Coerce
                    Agda.Compiler.MAlonzo.Compiler
                    Agda.Compiler.MAlonzo.Encode
                    Agda.Compiler.MAlonzo.HaskellTypes
                    Agda.Compiler.MAlonzo.Misc
                    Agda.Compiler.MAlonzo.Pragmas
                    Agda.Compiler.MAlonzo.Pretty
                    Agda.Compiler.MAlonzo.Primitives
                    Agda.Compiler.MAlonzo.Strict
                    Agda.Compiler.ToTreeless
                    Agda.Compiler.Treeless.AsPatterns
                    Agda.Compiler.Treeless.Builtin
                    Agda.Compiler.Treeless.Compare
                    Agda.Compiler.Treeless.EliminateDefaults
                    Agda.Compiler.Treeless.EliminateLiteralPatterns
                    Agda.Compiler.Treeless.Erase
                    Agda.Compiler.Treeless.GuardsToPrims
                    Agda.Compiler.Treeless.Identity
                    Agda.Compiler.Treeless.NormalizeNames
                    Agda.Compiler.Treeless.Pretty
                    Agda.Compiler.Treeless.Simplify
                    Agda.Compiler.Treeless.Subst
                    Agda.Compiler.Treeless.Uncase
                    Agda.Compiler.Treeless.Unused
                    Agda.ImpossibleTest
                    Agda.Interaction.AgdaTop
                    Agda.Interaction.Base
                    Agda.Interaction.BasicOps
                    Agda.Interaction.SearchAbout
                    Agda.Interaction.CommandLine
                    Agda.Interaction.EmacsCommand
                    Agda.Interaction.EmacsTop
                    Agda.Interaction.ExitCode
                    Agda.Interaction.JSONTop
                    Agda.Interaction.JSON
                    Agda.Interaction.FindFile
                    Agda.Interaction.Highlighting.Common
                    Agda.Interaction.Highlighting.Dot
                    Agda.Interaction.Highlighting.Emacs
                    Agda.Interaction.Highlighting.FromAbstract
                    Agda.Interaction.Highlighting.Generate
                    Agda.Interaction.Highlighting.HTML
                    Agda.Interaction.Highlighting.JSON
                    Agda.Interaction.Highlighting.Precise
                    Agda.Interaction.Highlighting.Range
                    Agda.Interaction.Highlighting.Vim
                    Agda.Interaction.Highlighting.LaTeX
                    Agda.Interaction.Imports
                    Agda.Interaction.InteractionTop
                    Agda.Interaction.Response
                    Agda.Interaction.MakeCase
                    Agda.Interaction.Monad
                    Agda.Interaction.Library
                    Agda.Interaction.Library.Base
                    Agda.Interaction.Library.Parse
                    Agda.Interaction.Options
                    Agda.Interaction.Options.Help
                    Agda.Interaction.Options.Lenses
                    Agda.Interaction.Options.Warnings
                    Agda.Main
                    Agda.Syntax.Abstract.Name
                    Agda.Syntax.Abstract.Pattern
                    Agda.Syntax.Abstract.PatternSynonyms
                    Agda.Syntax.Abstract.Pretty
                    Agda.Syntax.Abstract.Views
                    Agda.Syntax.Abstract
                    Agda.Syntax.Builtin
                    Agda.Syntax.Common
                    Agda.Syntax.Concrete.Attribute
                    Agda.Syntax.Concrete.Definitions
                    Agda.Syntax.Concrete.Definitions.Errors
                    Agda.Syntax.Concrete.Definitions.Monad
                    Agda.Syntax.Concrete.Definitions.Types
                    Agda.Syntax.Concrete.Fixity
                    Agda.Syntax.Concrete.Generic
                    Agda.Syntax.Concrete.Glyph
                    Agda.Syntax.Concrete.Name
                    Agda.Syntax.Concrete.Operators.Parser
                    Agda.Syntax.Concrete.Operators.Parser.Monad
                    Agda.Syntax.Concrete.Operators
                    Agda.Syntax.Concrete.Pattern
                    Agda.Syntax.Concrete.Pretty
                    Agda.Syntax.Concrete
                    Agda.Syntax.DoNotation
                    Agda.Syntax.Fixity
                    Agda.Syntax.IdiomBrackets
                    Agda.Syntax.Info
                    Agda.Syntax.Internal
                    Agda.Syntax.Internal.Blockers
                    Agda.Syntax.Internal.Defs
                    Agda.Syntax.Internal.Elim
                    Agda.Syntax.Internal.Generic
                    Agda.Syntax.Internal.MetaVars
                    Agda.Syntax.Internal.Names
                    Agda.Syntax.Internal.Pattern
                    Agda.Syntax.Internal.SanityCheck
                    Agda.Syntax.Literal
                    Agda.Syntax.Notation
                    Agda.Syntax.Parser.Alex
                    Agda.Syntax.Parser.Comments
                    Agda.Syntax.Parser.Layout
                    Agda.Syntax.Parser.LexActions
                    Agda.Syntax.Parser.Lexer
                    Agda.Syntax.Parser.Literate
                    Agda.Syntax.Parser.LookAhead
                    Agda.Syntax.Parser.Monad
                    Agda.Syntax.Parser.Parser
                    Agda.Syntax.Parser.StringLiterals
                    Agda.Syntax.Parser.Tokens
                    Agda.Syntax.Parser
                    Agda.Syntax.Position
                    Agda.Syntax.Reflected
                    Agda.Syntax.Scope.Base
                    Agda.Syntax.Scope.Monad
                    Agda.Syntax.Translation.AbstractToConcrete
                    Agda.Syntax.Translation.ConcreteToAbstract
                    Agda.Syntax.Translation.InternalToAbstract
                    Agda.Syntax.Translation.ReflectedToAbstract
                    Agda.Syntax.Treeless
                    Agda.Termination.CallGraph
                    Agda.Termination.CallMatrix
                    Agda.Termination.CutOff
                    Agda.Termination.Monad
                    Agda.Termination.Order
                    Agda.Termination.RecCheck
                    Agda.Termination.SparseMatrix
                    Agda.Termination.Semiring
                    Agda.Termination.TermCheck
                    Agda.Termination.Termination
                    Agda.TheTypeChecker
                    Agda.TypeChecking.Abstract
                    Agda.TypeChecking.CheckInternal
                    Agda.TypeChecking.CompiledClause
                    Agda.TypeChecking.CompiledClause.Compile
                    Agda.TypeChecking.CompiledClause.Match
                    Agda.TypeChecking.Constraints
                    Agda.TypeChecking.Conversion
                    Agda.TypeChecking.Conversion.Pure
                    Agda.TypeChecking.Coverage
                    Agda.TypeChecking.Coverage.Match
                    Agda.TypeChecking.Coverage.SplitTree
                    Agda.TypeChecking.Datatypes
                    Agda.TypeChecking.DeadCode
                    Agda.TypeChecking.DisplayForm
                    Agda.TypeChecking.DropArgs
                    Agda.TypeChecking.Empty
                    Agda.TypeChecking.EtaContract
                    Agda.TypeChecking.EtaExpand
                    Agda.TypeChecking.Errors
                    Agda.TypeChecking.Free
                    Agda.TypeChecking.Free.Lazy
                    Agda.TypeChecking.Free.Precompute
                    Agda.TypeChecking.Free.Reduce
                    Agda.TypeChecking.Forcing
                    Agda.TypeChecking.Functions
                    Agda.TypeChecking.Generalize
                    Agda.TypeChecking.IApplyConfluence
                    Agda.TypeChecking.Implicit
                    Agda.TypeChecking.Injectivity
                    Agda.TypeChecking.Inlining
                    Agda.TypeChecking.InstanceArguments
                    Agda.TypeChecking.Irrelevance
                    Agda.TypeChecking.Level
                    Agda.TypeChecking.LevelConstraints
                    Agda.TypeChecking.Lock
                    Agda.TypeChecking.Level.Solve
                    Agda.TypeChecking.MetaVars
                    Agda.TypeChecking.MetaVars.Mention
                    Agda.TypeChecking.MetaVars.Occurs
                    Agda.TypeChecking.Monad.Base
                    Agda.TypeChecking.Monad.Benchmark
                    Agda.TypeChecking.Monad.Builtin
                    Agda.TypeChecking.Monad.Caching
                    Agda.TypeChecking.Monad.Closure
                    Agda.TypeChecking.Monad.Constraints
                    Agda.TypeChecking.Monad.Context
                    Agda.TypeChecking.Monad.Debug
                    Agda.TypeChecking.Monad.Env
                    Agda.TypeChecking.Monad.Imports
                    Agda.TypeChecking.Monad.MetaVars
                    Agda.TypeChecking.Monad.Mutual
                    Agda.TypeChecking.Monad.Open
                    Agda.TypeChecking.Monad.Options
                    Agda.TypeChecking.Monad.Pure
                    Agda.TypeChecking.Monad.Signature
                    Agda.TypeChecking.Monad.SizedTypes
                    Agda.TypeChecking.Monad.State
                    Agda.TypeChecking.Monad.Statistics
                    Agda.TypeChecking.Monad.Trace
                    Agda.TypeChecking.Monad
                    Agda.TypeChecking.Names
                    Agda.TypeChecking.Patterns.Abstract
                    Agda.TypeChecking.Patterns.Internal
                    Agda.TypeChecking.Patterns.Match
                    Agda.TypeChecking.Polarity
                    Agda.TypeChecking.Positivity
                    Agda.TypeChecking.Positivity.Occurrence
                    Agda.TypeChecking.Pretty
                    Agda.TypeChecking.Pretty.Call
                    Agda.TypeChecking.Pretty.Constraint
                    Agda.TypeChecking.Pretty.Warning
                    Agda.TypeChecking.Primitive
                    Agda.TypeChecking.Primitive.Base
                    Agda.TypeChecking.Primitive.Cubical
                    Agda.TypeChecking.ProjectionLike
                    Agda.TypeChecking.Quote
                    Agda.TypeChecking.ReconstructParameters
                    Agda.TypeChecking.RecordPatterns
                    Agda.TypeChecking.Records
                    Agda.TypeChecking.Reduce
                    Agda.TypeChecking.Reduce.Fast
                    Agda.TypeChecking.Reduce.Monad
                    Agda.TypeChecking.Rewriting
                    Agda.TypeChecking.Rewriting.Clause
                    Agda.TypeChecking.Rewriting.Confluence
                    Agda.TypeChecking.Rewriting.NonLinMatch
                    Agda.TypeChecking.Rewriting.NonLinPattern
                    Agda.TypeChecking.Rules.Application
                    Agda.TypeChecking.Rules.Builtin
                    Agda.TypeChecking.Rules.Builtin.Coinduction
                    Agda.TypeChecking.Rules.Data
                    Agda.TypeChecking.Rules.Decl
                    Agda.TypeChecking.Rules.Def
                    Agda.TypeChecking.Rules.Display
                    Agda.TypeChecking.Rules.LHS
                    Agda.TypeChecking.Rules.LHS.Implicit
                    Agda.TypeChecking.Rules.LHS.Problem
                    Agda.TypeChecking.Rules.LHS.ProblemRest
                    Agda.TypeChecking.Rules.LHS.Unify
                    Agda.TypeChecking.Rules.Record
                    Agda.TypeChecking.Rules.Term
                    Agda.TypeChecking.Serialise
                    Agda.TypeChecking.Serialise.Base
                    Agda.TypeChecking.Serialise.Instances
                    Agda.TypeChecking.Serialise.Instances.Abstract
                    Agda.TypeChecking.Serialise.Instances.Common
                    Agda.TypeChecking.Serialise.Instances.Compilers
                    Agda.TypeChecking.Serialise.Instances.Highlighting
                    Agda.TypeChecking.Serialise.Instances.Internal
                    Agda.TypeChecking.Serialise.Instances.Errors
                    Agda.TypeChecking.SizedTypes
                    Agda.TypeChecking.SizedTypes.Solve
                    Agda.TypeChecking.SizedTypes.Syntax
                    Agda.TypeChecking.SizedTypes.Utils
                    Agda.TypeChecking.SizedTypes.WarshallSolver
                    Agda.TypeChecking.Sort
                    Agda.TypeChecking.Substitute
                    Agda.TypeChecking.Substitute.Class
                    Agda.TypeChecking.Substitute.DeBruijn
                    Agda.TypeChecking.SyntacticEquality
                    Agda.TypeChecking.Telescope
                    Agda.TypeChecking.Telescope.Path
                    Agda.TypeChecking.Unquote
                    Agda.TypeChecking.Warnings
                    Agda.TypeChecking.With
                    Agda.Utils.AffineHole
                    Agda.Utils.Applicative
                    Agda.Utils.AssocList
                    Agda.Utils.Bag
                    Agda.Utils.Benchmark
                    Agda.Utils.BiMap
                    Agda.Utils.CallStack
                    Agda.Utils.Char
                    Agda.Utils.Cluster
                    Agda.Utils.Empty
                    Agda.Utils.Environment
                    Agda.Utils.Either
                    Agda.Utils.Fail
                    Agda.Utils.Favorites
                    Agda.Utils.FileName
                    Agda.Utils.Float
                    Agda.Utils.Functor
                    Agda.Utils.Function
                    Agda.Utils.Graph.AdjacencyMap.Unidirectional
                    Agda.Utils.Graph.TopSort
                    Agda.Utils.Hash
                    Agda.Utils.Haskell.Syntax
                    Agda.Utils.Impossible
                    Agda.Utils.IndexedList
                    Agda.Utils.IntSet.Infinite
                    Agda.Utils.IO
                    Agda.Utils.IO.Binary
                    Agda.Utils.IO.Directory
                    Agda.Utils.IO.TempFile
                    Agda.Utils.IO.UTF8
                    Agda.Utils.IORef
                    Agda.Utils.Lens
                    Agda.Utils.Lens.Examples
                    Agda.Utils.List
                    Agda.Utils.List1
                    Agda.Utils.List2
                    Agda.Utils.ListT
                    Agda.Utils.Map
                    Agda.Utils.Maybe
                    Agda.Utils.Maybe.Strict
                    Agda.Utils.Memo
                    Agda.Utils.Monad
                    Agda.Utils.Monoid
                    Agda.Utils.Null
                    Agda.Utils.Parser.MemoisedCPS
                    Agda.Utils.PartialOrd
                    Agda.Utils.Permutation
                    Agda.Utils.Pointer
                    Agda.Utils.POMonoid
                    Agda.Utils.Pretty
                    Agda.Utils.RangeMap
                    Agda.Utils.SemiRing
                    Agda.Utils.Semigroup
                    Agda.Utils.Singleton
                    Agda.Utils.Size
                    Agda.Utils.SmallSet
                    Agda.Utils.String
                    Agda.Utils.Suffix
                    Agda.Utils.Three
                    Agda.Utils.Time
                    Agda.Utils.Trie
                    Agda.Utils.Tuple
                    Agda.Utils.TypeLevel
                    Agda.Utils.TypeLits
                    Agda.Utils.Update
                    Agda.Utils.VarSet
                    Agda.Utils.Warshall
                    Agda.Utils.WithDefault
                    Agda.Utils.Zipper
                    Agda.Version
                    Agda.VersionCommit

  other-modules:    Paths_Agda
                    Agda.Interaction.Highlighting.Dot.Backend
                    Agda.Interaction.Highlighting.Dot.Base
                    Agda.Interaction.Highlighting.HTML.Backend
                    Agda.Interaction.Highlighting.HTML.Base
                    Agda.Interaction.Highlighting.LaTeX.Backend
                    Agda.Interaction.Highlighting.LaTeX.Base
                    Agda.Interaction.Options.Base
                    Agda.Interaction.Options.HasOptions
                    Agda.Utils.CallStack.Base
                    Agda.Utils.CallStack.Pretty

  if flag(optimise-heavily)
    ghc-options: -fexpose-all-unfoldings
                 -fspecialise-aggressively

  -- NOTE: If adding flags, also add to \`.ghci-8.0\`
  if impl(ghc <= 8.0.2)
    ghc-options: -fprint-potential-instances
                 -- Initially, we disable all the warnings.
                 -w
                 -Wwarn
                 -- This option must be the first one after disabling the
                 -- warnings. See Issue #2094.
                 -Wunrecognised-warning-flags
                 -Wdeprecated-flags
                 -Wderiving-typeable
                 -Wdodgy-exports
                 -Wdodgy-foreign-imports
                 -Wdodgy-imports
                 -Wduplicate-exports
                 -Wempty-enumerations
                 -Widentities
                 -Wincomplete-patterns
                 -Winline-rule-shadowing
                 -Wmissing-fields
                 -Wmissing-methods
                 -Wmissing-pattern-synonym-signatures
                 -Wmissing-signatures
                 -Wnoncanonical-monad-instances
                 -Wnoncanonical-monoid-instances
                 -Woverflowed-literals
                 -Woverlapping-patterns
                 -Wsemigroup
                 -Wtabs
                 -Wtyped-holes
                 -Wunrecognised-pragmas
                 -Wunticked-promoted-constructors
                 -Wunused-do-bind
                 -Wunused-foralls
                 -Wwarnings-deprecations
                 -Wwrong-do-bind
  else
    ghc-options: -fprint-potential-instances
                 -Wwarn=unrecognised-warning-flags
                 -Wwarn=deprecated-flags
                 -Wwarn=deriving-typeable
                 -Wwarn=dodgy-exports
                 -Wwarn=dodgy-foreign-imports
                 -Wwarn=dodgy-imports
                 -Wwarn=duplicate-exports
                 -Wwarn=empty-enumerations
                 -Wwarn=identities
                 -Wwarn=incomplete-patterns
                 -Wwarn=inline-rule-shadowing
                 -Wwarn=missing-fields
                 -Wwarn=missing-methods
                 -Wwarn=missing-pattern-synonym-signatures
                 -Wwarn=missing-signatures
                 -Wwarn=noncanonical-monad-instances
                 -Wwarn=noncanonical-monoid-instances
                 -Wwarn=overflowed-literals
                 -Wwarn=overlapping-patterns
                 -Wwarn=semigroup
                 -Wwarn=tabs
                 -Wwarn=typed-holes
                 -Wwarn=unrecognised-pragmas
                 -Wwarn=unticked-promoted-constructors
                 -Wwarn=unused-do-bind
                 -Wwarn=unused-foralls
                 -Wwarn=warnings-deprecations
                 -Wwarn=wrong-do-bind

  -- NOTE: If adding or removing flags, also change \`.ghci-8.2\`
  if impl(ghc >= 8.2)
    ghc-options: -Wcpp-undef
                 -- ASR TODO (2017-07-23): \`make haddock\` fails when
                 -- this flag is on.
                 -- -Wmissing-home-modules
                 -Wwarn=simplifiable-class-constraints
                 -Wwarn=unbanged-strict-patterns

  -- NOTE: If adding or removing flags, also change \`.ghci-8.6\`
  if impl(ghc >= 8.6)
    ghc-options: -Wwarn=inaccessible-code
                 -Wwarn=star-binder
                 -Wwarn=star-is-type

  -- The following warning is an error in GHC >= 8.10.
  if impl(ghc >= 8.6) && impl(ghc < 8.10)
    ghc-options: -Wwarn=implicit-kind-vars

  -- NOTE: If adding or removing flags, also change \`.ghci-8.8\`
  if impl(ghc >= 8.8)
    ghc-options: -Wwarn=missed-extra-shared-lib

  -- NOTE: If adding or removing flags, also change \`.ghci-8.10\`
  if impl(ghc >= 8.10)
    ghc-options: -Wwarn=deriving-defaults
                 -Wwarn=redundant-record-wildcards
                 -Wwarn=unused-packages
                 -Wwarn=unused-record-wildcards

  -- NOTE: If adding or removing flags, also change \`.ghci-9.0\`
  if impl(ghc >= 9.0)
    ghc-options: -Wwarn=invalid-haddock

  default-language: Haskell2010

  -- NOTE: If adding or removing default extensions, also change:
  --         .ghci-8.0
  --         .hlint.yaml
  -- This should also use the same extensions as the \`test-suite\` target below.
  default-extensions: BangPatterns
                    , ConstraintKinds
                    --L-T Chen (2019-07-15):
                    -- Enabling DataKinds only locally makes the compile time
                    -- slightly shorter, see PR #3920.
                    --, DataKinds
                    , DefaultSignatures
                    , DeriveDataTypeable
                    , DeriveFoldable
                    , DeriveFunctor
                    , DeriveGeneric
                    , DeriveTraversable
                    , ExistentialQuantification
                    , FlexibleContexts
                    , FlexibleInstances
                    , FunctionalDependencies
                    , GeneralizedNewtypeDeriving
                    , InstanceSigs
                    , LambdaCase
                    , MultiParamTypeClasses
                    , MultiWayIf
                    , NamedFieldPuns
                    , OverloadedStrings
                    , PatternSynonyms
                    , RankNTypes
                    , RecordWildCards
                    , ScopedTypeVariables
                    , StandaloneDeriving
                    , TupleSections
                    , TypeFamilies
                    , TypeSynonymInstances

executable agda
  hs-source-dirs: src/main
  main-is:        Main.hs
  build-depends:  Agda
                  -- A version range on Agda generates a warning with
                  -- some versions of Cabal and GHC
                  -- (e.g. cabal-install version 1.24.0.2 compiled
                  -- using version 1.24.2.0 of the Cabal library and
                  -- GHC 8.2.1 RC1).

                  -- Nothing is used from the following package,
                  -- except for the Prelude.
                , base
  default-language: Haskell2010
  -- If someone installs Agda with the setuid bit set, then the
  -- presence of +RTS may be a security problem (see GHC bug #3910).
  -- However, we sometimes recommend people to use +RTS to control
  -- Agda's memory usage, so we want this functionality enabled by
  -- default.

  -- The threaded RTS by default starts a major GC after a program has
  -- been idle for 0.3 s. This feature turned out to be annoying, so
  -- the idle GC is now by default turned off (-I0).
  ghc-options: -threaded -rtsopts
               "-with-rtsopts=-M3.5G -I0"

executable agda-mode
  hs-source-dirs:   src/agda-mode
  main-is:          Main.hs
  other-modules:    Paths_Agda
  build-depends:    base >= 4.9.0.0 && < 4.18
                  , directory >= 1.2.6.2 && < 1.4
                  , filepath >= 1.4.1.0 && < 1.5
                  , process >= 1.4.2.0 && < 1.7
  default-language: Haskell2010
`
