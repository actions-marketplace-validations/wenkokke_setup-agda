# setup-agda

[![Check dist](https://github.com/wenkokke/setup-agda/actions/workflows/check-dist.yml/badge.svg)](https://github.com/wenkokke/setup-agda/actions/workflows/check-dist.yml)
[![Build Agda (latest)](https://github.com/wenkokke/setup-agda/actions/workflows/test-build-latest.yml/badge.svg)](https://github.com/wenkokke/setup-agda/actions/workflows/test-build-latest.yml)
[![Setup Agda (latest)](https://github.com/wenkokke/setup-agda/actions/workflows/test-setup-latest.yml/badge.svg)](https://github.com/wenkokke/setup-agda/actions/workflows/test-setup-latest.yml)
[![Setup Agda (2.6.2.2)](https://github.com/wenkokke/setup-agda/actions/workflows/test-setup-2_6_2_2.yml/badge.svg)](https://github.com/wenkokke/setup-agda/actions/workflows/test-setup-2_6_2_2.yml)

This action sets up an Agda environment for use in actions by installing or building a version of Agda and adding it to PATH.

For supported versions, this action uses [custom binary distributions][custom-binary-distributions].
For all other versions, this action attempts to build Agda from source.

## Usage

See [action.yml](action.yml)

Minimal:

```yaml
on: [push]
name: check
jobs:
  check:
    name: Check Hello.agda
    runs-on: ubuntu-latest # or macOS-latest, or windows-latest
    steps:
      - uses: actions/checkout@v3
      - uses: wenkokke/setup-agda@latest
      - run: agda Hello.agda
```

Basic:

```yaml
on: [push]
name: check
jobs:
  check:
    name: Check Hello.agda
    runs-on: ubuntu-latest # or macOS-latest, or windows-latest
    steps:
      - uses: actions/checkout@v3
      - uses: wenkokke/setup-agda@latest
        with:
          agda-version: '2.6.2.2'
      - run: agda Hello.agda
```

## Supported versions

| Agda    | Release | Ubuntu | macOS | Windows |
| ------- | ------- | ------ | ----- | ------- |
| 2.6.2.2 | source  | \*     | \*    | >=2022  |
| 2.6.2.2 | binary  | \*     | \*    | \*      |

[custom-binary-distributions]: https://github.com/wenkokke/setup-agda/releases/tag/latest
