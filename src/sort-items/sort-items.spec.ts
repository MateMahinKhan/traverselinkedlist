import { sortByFirstToLast } from './sort-items';

describe('sortItems', () => {
  it('should sort the array correctly 1', () => {
    const item1 = {
      id: 1,
      previous: null,
      next: 3,
    };
    const item2 = {
      id: 2,
      previous: 3,
      next: null,
    };
    const item3 = {
      id: 3,
      previous: 1,
      next: 2,
    };

    const ideas = [item1, item2, item3];
    const sortedItems = sortByFirstToLast(ideas, 'previous', 'next');

    expect(sortedItems[0].id).toEqual(1);
    expect(sortedItems[0].previous).toBeNull();
    expect(sortedItems[0].next).toEqual(3);

    expect(sortedItems[1].id).toEqual(3);
    expect(sortedItems[1].next).toEqual(2);
    expect(sortedItems[1].previous).toEqual(1);

    expect(sortedItems[2].id).toEqual(2);
    expect(sortedItems[2].next).toBeNull();
    expect(sortedItems[2].previous).toEqual(3);
  });

  it('should sort the array correctly 2', () => {
    const item1 = {
      id: 1,
      previous: null,
      next: 2,
    };
    const item2 = {
      id: 2,
      previous: 1,
      next: 3,
    };
    const item3 = {
      id: 3,
      previous: 2,
      next: 4,
    };
    const item4 = {
      id: 4,
      previous: 3,
      next: null,
    };

    const items = [item1, item3, item4, item2];
    const sorteditems = sortByFirstToLast(items, 'previous', 'next');

    expect(sorteditems[0].id).toEqual(1);
    expect(sorteditems[0].previous).toBeNull();

    expect(sorteditems[1].id).toEqual(2);
    expect(sorteditems[1].next).toEqual(3);

    expect(sorteditems[2].id).toEqual(3);
    expect(sorteditems[2].next).toEqual(4);

    expect(sorteditems[3].id).toEqual(4);
    expect(sorteditems[3].next).toBeNull();
  });

  it('should return the array unsorted', () => {
    const item1 = {
      id: 1,
      previous: null,
      next: null,
    };
    const item2 = {
      id: 2,
      previous: null,
      next: null,
    };
    const item3 = {
      id: 3,
      previous: null,
      next: null,
    };
    const item4 = {
      id: 4,
      previous: null,
      next: null,
    };

    const ideas = [item1, item2, item3, item4];
    const sortedItems = sortByFirstToLast(ideas, 'previous', 'next');

    expect(sortedItems[0].id).toEqual(1);
    expect(sortedItems[0].previous).toBeNull();

    expect(sortedItems[1].id).toBe(2);
    expect(sortedItems[1].next).toBeNull();

    expect(sortedItems[2].id).toEqual(3);
    expect(sortedItems[2].next).toBeNull();

    expect(sortedItems[3].id).toEqual(4);
    expect(sortedItems[3].next).toBeNull();
  });
});
