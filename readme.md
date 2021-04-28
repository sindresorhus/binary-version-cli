# bin-version-cli

> Get the version of a binary in [semver](https://github.com/npm/node-semver) format

## Install

```
$ npm install --global bin-version-cli
```

## Usage

```
$ bin-version --help

  Usage
    $ bin-version <binary> [arguments]

    The arguments default to `--version`

    Exits with code 2 if no version could be found

  Examples
    $ curl --version
    curl 7.30.0 (x86_64-apple-darwin13.0)
    $ bin-version curl
    7.30.0
    $ openssl version
    OpenSSL 1.0.2p  14 Aug 2018
    $ bin-version openssl version
    1.0.2
```

## Related

- [bin-version](https://github.com/sindresorhus/bin-version) - API for this module
- [find-versions-cli](https://github.com/sindresorhus/find-versions-cli) - Find semver versions in a string
