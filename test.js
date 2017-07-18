import nock from 'nock';
import test from 'ava';
import createGist from '.';

test('create gist', async t => {
	const req = nock('https://api.github.com')
		.post('/gists', {
			description: 'Test',
			public: false,
			files: {
				'test.js': {
					content: 'test'
				}
			}
		})
		.reply(200, {
			html_url: 'https://gist.github.com/test' // eslint-disable-line camelcase
		});

	const url = await createGist({
		description: 'Test',
		public: false,
		files: [
			{
				name: 'test.js',
				source: 'test'
			}
		]
	});

	t.true(req.isDone());
	t.is(url, 'https://gist.github.com/test');
});
