export const partitionArray =
  (array: any[], size: number) =>
    array.map(
      (e, i) => (i % size === 0) ? array.slice(i, i + size) : null)
      .filter((e) => e);
