# Perform operations on linked list

### Sort
Perform sort operations on a list of objects that are linked together in the following manner.

```
[
  { id: 1, removed: false, nextItem: 2, previousItem: null },
  { id: 2, removed: false, nextItem: 3, previousItem: 1 },
  { id: 3, removed: false, nextItem: null, previousItem: 2 },
]
```

`nextItem` and `previousItem` are properties containing id of the item that next or previous in the list.

### Get first item
Get the first item in the list


```
const items = [
  { id: 2, removed: false, nextItem: 3, previousItem: 1 },
  { id: 1, removed: false, nextItem: 2, previousItem: null },
  { id: 3, removed: false, nextItem: null, previousItem: 2 },
]

const firstItem = getFirstItem(items, 'previousItem', 'nextItem');
// it will return 
// { id: 1, removed: false, nextItem: 2, previousItem: null }
```
