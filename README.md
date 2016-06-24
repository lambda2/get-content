# get-content [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Fetch content of a url, a file, or even UNIX sockets.;


## Install

```sh
$ npm install --save get-content
```

## Usage

```js
var getContent = require('get-content');

getContent.get('http://example.org').then(function(response){
  console.log(response); /* html content of http://example.org */
})

getContent.get('./README.md').then(function(response){
  console.log(response); /* content of README.md file */
})
```

## License

MIT © [Andre Aubin](andral.kiwi)


[npm-image]: https://badge.fury.io/js/get-content.svg
[npm-url]: https://npmjs.org/package/get-content
[travis-image]: https://travis-ci.org/lambda2/get-content.svg?branch=master
[travis-url]: https://travis-ci.org/lambda2/get-content
[daviddm-image]: https://david-dm.org/lambda2/get-content.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lambda2/get-content
[coveralls-image]: https://coveralls.io/repos/github/lambda2/get-content/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/lambda2/get-content?branch=master
