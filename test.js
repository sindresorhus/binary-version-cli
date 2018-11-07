import test from 'ava';
import execa from 'execa';

const reVersion = /\d+\.\d+\.\d+/;

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['curl']);
	t.regex(stdout, reVersion);
});
