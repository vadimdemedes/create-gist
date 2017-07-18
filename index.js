'use strict';

const arrify = require('arrify');
const got = require('got');

module.exports = ({description, public: isPublic, files} = {}) => {
	const gistFiles = {};

	arrify(files).forEach(file => {
		gistFiles[file.name] = {
			content: file.source
		};
	});

	return got.post('https://api.github.com/gists', {
		json: true,
		body: {
			description,
			public: typeof isPublic === 'boolean' ? isPublic : true,
			files: gistFiles
		}
	}).then(res => res.body.html_url); // eslint-disable-line camelcase
};
