# attribute-each

The attribute-each is to operate record like object with keeping the key. These make your develop effective.

The concise features are is the following;

* easier to write a operation of object
* more safety with immutability
* made by TypeScript

## TOC

## Install

> Warning.
> The followings as copied and pasted is not working. Change version number you want.

### Yarn

```sh
yarn install -D ssh://git@github.com:NULL-header/react-test-util.git#version
```

### Npm

```sh
npm i --save-dev git+git@github.com:NULL-header/react-test-util.git#version
```

There are the tags as versions in the repository. So you must specify the tag name you want when you install this.

## Usage

```ts
import { makeWith } from "./ObjManager";

const item = { foo: "foo", bar: "bar" };
const men = makeWith(item).map((e) => "Mr." + e);
// { foo: "Mr.foo", bar: "Mr.bar" }
console.log(men);
```

If you want to learn more, look [here](./doc/features.md)

## License

MIT © NULL-header
