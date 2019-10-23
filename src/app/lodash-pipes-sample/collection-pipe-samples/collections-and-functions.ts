import { Functions } from '../common/functions';

export class CollectionsAndFunctions extends Functions {

  array4CountBy = [
    6.1,
    4.2,
    6.3,
  ];

  object4CountBy = { a: 6.1, b: 4.2, c: 6.3 };

  array4Every = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': false },
  ];
  object4Every = {
    barney: { 'user': 'barney', 'age': 36, 'active': false },
    fred: { 'user': 'fred', 'age': 40, 'active': false },
  };

  array4Filter = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
  ];

  array4Find = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true },
  ];

  array4FindLast = [
    1,
    2,
    3,
    4,
  ];

  array4FlatMap = [
    1,
    2,
  ];

  array4FlatMapDeep = [
    1,
    2,
  ];

  array4FlatMapDepth = [
    1,
    2,
  ];

  array4ForEach = [
    1,
    2,
  ];
  object4ForEach = { a: 1, b: 2 };

  array4ForEachRight = [
    1,
    2,
  ];

  array4GroupBy = [
    6.1,
    4.2,
    6.3,
  ];

  array4Includes = [
    1,
    2,
  ];
  object4Includes = { 'a': 1, 'b': 2 };

  array4InvokeMap = [
    [
      5,
      1,
      7,
    ],
    [
      3,
      2,
      1,
    ],
  ];

  array4InvokeMap2 = [
    123,
    456,
  ];

  array4KeyBy = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 },
  ];

  array4Map = [
    4,
    8,
  ];
  array4Map2 = [
    { 'user': 'barney' },
    { 'user': 'fred' },
  ];
  object4Map = { 'a': 4, 'b': 8 };

  array4OrderBy = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 },
  ];

  array4Partition = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false },
  ];

  array4Reduce = [
    1,
    2,
  ];
  object4Reduce = { 'a': 1, 'b': 2, 'c': 1 };

  array4ReduceRight = [
    [
      0,
      1,
    ],
    [
      2,
      3,
    ],
    [
      4,
      5,
    ],
  ];

  array4Reject = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
  ];

  array4Sample = [
    1,
    2,
    3,
    4,
  ];

  array4Shuffle = [
    1,
    2,
    3,
    4,
  ];

  array4Size = [
    1,
    2,
    3,
  ];
  object4Size = { a: 1, b: 2 };
  string4Size = 'pebbles';

  array4Some = [
    null,
    0,
    'yes',
    false,
  ];
  object4Some = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
  ];

  array4SortBy = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
}
