import { Item } from '../item';

export function sortByFirstToLast<
  T extends { id: number },
  TKey extends keyof T,
>(arr: T[], previousPointer: TKey, nextPointer: TKey): T[] {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  if (arr.length === 0) {
    return arr;
  }

  const allObjectsAreLegacy = arr.every(
    (item) => item[nextPointer] === null && item[previousPointer] === null,
  );
  if (allObjectsAreLegacy) {
    return arr;
  }

  const legacyObjects = arr.filter(
    (item) => item[nextPointer] === null && item[previousPointer] === null,
  );
  const updatedArr = arr.filter(
    (item) => item[nextPointer] !== null || item[previousPointer] !== null,
  );

  const sorted: Item<T, TKey>[] = [];
  const visited = new Set();
  let current: T | undefined = updatedArr.find(
    (item) => item[previousPointer] === null,
  );

  while (current !== undefined) {
    if (visited.has(current)) {
      return arr;
    }

    sorted.push(current);
    visited.add(current);

    current = updatedArr.find((item) => {
      if (current) {
        return (
          item.id === (current[nextPointer as keyof T] as unknown as number)
        );
      }
    });
  }

  const sortedNLegacy = [...sorted, ...legacyObjects];

  const unsortedObjects = arr.filter((item) => !sortedNLegacy.includes(item));

  return [...sortedNLegacy, ...unsortedObjects];
}
