export function getItemFromList<T extends { id: number }, TKey extends keyof T>(
  items: T[],
  firstOrLast: 'first' | 'last',
  previousPointer: TKey,
  nextPointer: TKey,
): T | null {
  try {
    if (items.length) {
      const allItemsAreLegacy = items.every(
        (v) => v[nextPointer] === null && v[previousPointer] === null,
      );
      if (allItemsAreLegacy) {
        return firstOrLast === 'first' ? items[0] : items[items.length - 1];
      }

      const targetItem = items.find((v) => {
        return firstOrLast === 'first'
          ? v[previousPointer] === null
          : v[nextPointer] === null;
      });
      if (!targetItem) {
        throw new Error(
          `${
            firstOrLast === 'first' ? 'First' : 'Last'
          } item not found in the array`,
        );
      }
      return targetItem;
    }
    return null;
  } catch (error) {
    return null;
  }
}
