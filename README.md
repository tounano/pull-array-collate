# pull-array-collate

Collate arrays and send them downstream.

This `pull-stream` is combination of a Sink and a Through. It will sink all the objects from upstream, once upstream
reached it's end, it'll send downstream an array.

## Example

```js
var pull = require("pull-stream");
var arrCollateStream = require("pull-array-collate");

function plusOneMapper(num) {
  return num+1;
}

pull(
  pull.values([1,2,3,4]),
  pull.map(plusOneMapper),
  arrCollateStream(),
  pull.drain(console.log)
)
```

**Result:**

```
[ 2, 3, 4, 5 ]
```

## install

With [npm](https://npmjs.org) do:

```
npm install pull-array-collate
```

## license

MIT