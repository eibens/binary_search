/**
 * Finds the index of an element in an array in logarithmic time.
 *
 * The array MUST be sorted according to the `compare` function, and no error will be raised if it is not. If the item is not found, a number is returned that is the complement of the index at which the element would have to be inserted to preserve the order.
 *
 * The code is based on this Stack Overflow answer:
 * https://stackoverflow.com/a/29018745/925580
 *
 * @param array is the sorted sequence of elements that should be searched.
 * @param item is the item that should be found.
 * @param compare is the function that compares to elements.
 * @returns the index of the item in the array, or the complement of the insertion index.
 */
export function find<T>(
  array: T[],
  item: T,
  compare: (a: T, b: T) => number,
): number {
  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    const c = compare(item, array[m]);
    if (c > 0) {
      l = m + 1;
    } else if (c < 0) {
      r = m - 1;
    } else {
      return m;
    }
  }
  // not found, return insertion index (complement)
  return ~l;
}

/**
 * Finds the index of a number in an array of numbers.
 *
 * This is a specialization of the generic `find` method. It further demonstrates how the comparator is expected to return the sign of the difference between its first and second argument.
 *
 * @param array is the sorted sequence of numbers that should be searched.
 * @param item is the number that should be found.
 * @returns the index of the number in the array, or the complement of the insertion index.
 */
export function findNumber(array: number[], item: number): number {
  return find(array, item, (a, b) => a - b);
}
