---
title: My Rad Markdown Blog Post
layout: blog
---

# {{ title }}

Not twoslash:

```ts
const notTwoslash = ""
```

With twoslash:

```ts twoslash
const abc = {
  b: "c"
}
abc.b
//^?
```

Emit:

```ts twoslash
// @showEmit
const abc = {
  b: "c"
}
abc.b
```


Cutting:

```tsx twoslash
interface IdLabel {id: number, /* some fields */ }
interface NameLabel {name: string, /* other fields */ }
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
// This comment should not be included

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}

let a = createLabel("typescript");
```

Errors:

```ts twoslash
// @errors: 2322
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

JSON:

```json
{
  "name": "11ty-twoslash-test",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Orta Therox",
  "license": "MIT",
  "dependencies": {
    "@11ty/eleventy": "^0.11.0",
    "@types/markdown-it": "^10.0.2",
    "shiki-twoslash": "^0.6.2"
  }
}

```
