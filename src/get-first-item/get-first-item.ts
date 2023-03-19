import { getItemFromList } from '../get-item/get-item';

export function getFirstItem<T extends { id: number }, TKey extends keyof T>(
  items: T[],
  previousPointer: TKey,
  nextPointer: TKey,
): T | null {
  return getItemFromList(items, 'first', previousPointer, nextPointer);
}
