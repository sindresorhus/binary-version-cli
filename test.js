import test from 'ava';
import {execa} from 'execa';

const versionRegex = /\d+\.\d+\.\d+/;

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['curl']);
	t.regex(stdout, versionRegex);
});
