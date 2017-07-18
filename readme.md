# create-gist [![Build Status](https://travis-ci.org/vadimdemedes/create-gist.svg?branch=master)](https://travis-ci.org/vadimdemedes/create-gist)

> Create an anonymous gist


## Install

```
$ npm install create-gist
```


## Usage

```js
const createGist = require('create-gist');

const url = await createGist({
	description: 'My lovely gist',
	public: false,
	files: [
		{
			name: 'test.js',
			source: 't.is(a, b)'
		}
	]
});
//=> https://gist.github.com/40cd13c18a51ca98c7eebd4cb79c8f95
```


## API

### createGist(options)

Returns: `Promise`

#### options

##### description

Type: `string`

Description of the gist.

##### public

Type: `boolean`<br>
Default: `true`

Create a public or private gist.

##### files

Type: `array`

Array of objects with `name` (filename) and `source` (source of the file) props.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
