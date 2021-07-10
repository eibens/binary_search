# binary_search

The [binary search algorithm] implemented in TypeScript for [Deno].

[![License][license-shield]](LICENSE) [![Deno doc][deno-doc-shield]][deno-doc]
[![Deno module][deno-land-shield]][deno-land]
[![Github tag][github-shield]][github] [![Build][build-shield]][build]
[![Code coverage][coverage-shield]][coverage]

# Motivation

Sometimes one needs `O(log n)` search performance.

# [mod.ts](mod.ts)

The `find` function can be used to find an `item` in an `array`. The array must
be sorted according to the `compare` function.

```ts
import { find } from "https://deno.land/x/binary_search/mod.ts";

const array = ["a", "b", "c", "d", "e"];
const compare = (a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0);
const index = find(array, "c", compare);

console.assert(index === 2);
```

If the `item` is not in the `array`, a negative number is is returned. The
complement of that number is the index at which one would have to insert the
`item` to preserve the `order`.

```ts
import { find } from "https://deno.land/x/binary_search/mod.ts";

const array = [0, 1, 2, 3, 4];
const index = find(array, 2.5, (a, b) => a - b);

console.assert(index === -4);
console.assert(~index === 3);
```

The `findNumber` function is a special case of `find` for searching a number in
an ordered sequence of numbers.

```ts
import { findNumber } from "https://deno.land/x/binary_search/mod.ts";

const array = [0, 1, 2, 3, 4];
const index = findNumber(array, 2);

console.assert(index === 2);
```

[binary_search]: #
[Deno]: https://deno.land
[binary search algorithm]: https://en.wikipedia.org/wiki/Binary_search_algorithm

<!-- badges -->

[github]: https://github.com/eibens/binary_search
[github-shield]: https://img.shields.io/github/v/tag/eibens/binary_search?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/binary_search?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/binary_search?color=informational
[coverage]: https://codecov.io/gh/eibens/binary_search
[build]: https://github.com/eibens/binary_search/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/binary_search/ci?logo=github&label
[deno-doc]: https://doc.deno.land/https/deno.land/x/binary_search/mod.ts
[deno-doc-shield]: https://img.shields.io/badge/doc-informational?logo=deno
[deno-land]: https://deno.land/x/binary_search
[deno-land-shield]: https://img.shields.io/badge/x/binary__search-informational?logo=deno&label
