#!/usr/bin/env node
import meow from 'meow';
import binaryVersion from 'bin-version';

const cli = meow(`
	Usage
	  $ bin-version <binary> [arguments]

	  The arguments default to \`--version\`

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
`);

const [binary, ...binaryArguments] = cli.input;

if (!binary && process.stdin.isTTY) {
	console.error('Binary name required');
	process.exit(1);
}

const options = {};
if (binaryArguments.length > 0) {
	options.args = binaryArguments;
}

(async () => {
	const version = await binaryVersion(binary, options);

	if (!version) {
		console.error(`Could not find a version for \`${binary}\``);
		process.exit(2);
	}

	console.log(version);
})();
