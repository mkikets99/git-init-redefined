# git-init
<small>This is fork from [`git-init`](https://github.com/yoshuawuyts/git-init) package</small>

Initialize a new git repository.

## Installation
```bash
$ npm install @mkikets/git-init
```

## Usage
### Callback
```js
const init = require('@mkikets/git-init')

init('./', (err) => {
  if (err) throw err
})
```
### Promises
```js
const init = require('@mkikets/git-init').promise

init('./')
  .then(()=>{
    console.log("initialized")
  })
  .catch((err) => {
    console.error(err);
  })
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/git-init.svg?style=flat-square
[npm-url]: https://npmjs.org/package/git-init
[downloads-image]: http://img.shields.io/npm/dm/git-init.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/git-init
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
