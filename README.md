# Leemon

High perfomance big integer library for modern javascript application

```bash
npm install --save leemon
```

```bash
yarn add leemon
```

[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]


A bigInt is an array of integers storing the value in chunks of bpe bits, little endian (buff[0] is the least significant word).
Negative bigInts are stored two's complement. Almost all the functions treat bigInts as nonnegative. The few that view them as two's complement say so in their comments.
Some functions assume their parameters have at least one leading zero element.
Functions with an underscore at the end of the name put their answer into one of the arrays passed in, and have unpredictable behavior in case of overflow, so the caller must make sure the arrays are big enough to hold the answer.
But the average user should never have to call any of the underscored functions. Each important underscored function has a wrapper function of the same name without the underscore that takes care of the details for you.
For each underscored function where a parameter is modified, that same variable must not be used as another argument too.
So, you cannot square x by doing `multMod_(x,x,n)`.  You must use `squareMod_(x,n)` instead, or do `y=dup(x); multMod_(x,y,n)`.
Or simply use the `multMod(x,x,n)` function without the underscore, where such issues never arise, because non-underscored functions never change their parameters (immutable); they always allocate new memory for the answer that is returned.

# API
Complete API reference can be found [here](./API.md)

This code is reincarnation of Big Integer Library created by [Leemon Baird](https://www.leemon.com/) in 2000, supported up to 2013

[npm-url]: https://www.npmjs.org/package/leemon
[npm-image]: https://badge.fury.io/js/leemon.svg
[travis-image]: https://travis-ci.org/zerobias/leemon.svg?branch=master
[travis-url]: https://travis-ci.org/zerobias/leemon
