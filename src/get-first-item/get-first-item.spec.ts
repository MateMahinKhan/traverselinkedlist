import { getFirstItem } from './get-first-item';

describe('getFirstItem', () => {
  it('should get the first item from the array correctly', () => {
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

    const items = [item1, item2, item3];
    const firstItem = getFirstItem(items, 'previous', 'next');

    expect(firstItem?.id).toEqual(1);
    expect(firstItem?.previous).toBeNull();
    expect(firstItem?.next).toEqual(3);
  });

  it('should get the first item from the array correctly 2', () => {
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

    const items = [item2, item3, item4, item1];
    const firstItem = getFirstItem(items, 'previous', 'next');

    expect(firstItem?.id).toEqual(item1.id);
    expect(firstItem?.next).toEqual(item1.next);
    expect(firstItem?.previous).toBeNull();
  });

  it('should return null if there are no items', () => {
    const items = [];
    const result = getFirstItem(items, 'previous', 'next');
    expect(result).toBeNull();
  });
});
