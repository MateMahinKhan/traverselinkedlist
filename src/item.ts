export type Item<T, TKey extends keyof T> = T & {
  [K in TKey]: T[K];
};
