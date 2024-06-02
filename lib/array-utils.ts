/**
 * Divides the given array into groups of the given size.
 * @param array Original array to be divided into chunks.
 * @param chunkSize The size of the groups.
 * @returns An array holding the groups of elements.
 */
export function chunk<T>(array: T[], chunkSize: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize));
}

/**
 * Adds new elements to the given array, until its size is multiple of the given number.
 * The given array is filled with the given 'fillWith' elements.
 * @param array An array to be filled with elements.
 * @param multiple The desired multiple of the length of the given array.
 * @param fillWithFactory A factory that produces the new elements to be added to the array.
 */
export function fillToMultiple<T>(array: T[], multiple: number, fillWithFactory: (index: number) => T): T[] {
  const elementsToAdd = multiple - array.length % multiple;
  if (elementsToAdd === 0) {
    return array;
  }
  const newArray = Array.from(array);  // We duplicate the given array for inmutability reasons
  for (let i = 0; i < elementsToAdd; i++) {
    newArray.push(fillWithFactory(i));
  }
  return newArray;
}
