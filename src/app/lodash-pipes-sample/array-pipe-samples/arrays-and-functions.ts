import { Functions } from '../common/functions';

export class ArraysAndFunctions extends Functions {

  array4Chunk = [
    'a',
    'b',
    'c',
    'd',
  ];

  array4Compact = [
    0,
    1,
    false,
    2,
    '',
    3,
  ];

  array4Concat = [1];

  array4Difference = [
    2,
    1,
  ];
  otherArray4Difference = [
    2,
    3,
  ];

  array4DifferenceBy = [
    2.1,
    1.2,
  ];
  otherArray4DifferenceBy = [
    2.3,
    3.4,
  ];

  array4DifferenceWith = [
    { 'x': 1, 'y': 2 },
    { 'x': 2, 'y': 1 },
  ];
  otherArray4DifferenceWith = [{ 'x': 1, 'y': 2 }];

  array4Drop = [
    1,
    2,
    3,
  ];

  array4DropWhile = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false },
  ];

  array4Fill = [
    1,
    2,
    3,
  ];

  array4FindIndex = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true },
  ];

  predicate4FindIndex = { user: 'barney' };
  predicate4FindLastIndex = { active: false };

  array4Flatten = [
    1,
    [
      2,
      [
        3,
        [4],
      ],
      5,
    ],
  ];

  array4FromPairs = [
    [
      'a',
      1,
    ],
    [
      'b',
      2,
    ],
  ];

  array4Head = [
    1,
    2,
    3,
  ];

  array4IndexOf = [
    1,
    2,
    1,
    2,
  ];

  array4Initial = [
    1,
    2,
    3,
  ];

  array4Intersection = [
    [
      2,
      1,
    ],
    [
      2,
      3,
    ],
  ];

  array4IntersectionBy = [
    [
      2.1,
      1.2,
    ],
    [
      2.3,
      3.4,
    ],
  ];

  array4IntersectionWith = [
    [
      { 'x': 1, 'y': 2 },
      { 'x': 2, 'y': 1 },
    ],
    [
      { 'x': 1, 'y': 1 },
      { 'x': 1, 'y': 2 },
    ],
  ];

  array4Join = [
    'a',
    'b',
    'c',
  ];

  array4Last = [
    1,
    2,
    3,
  ];

  array4LastIndexOf = [
    1,
    2,
    1,
    2,
  ];

  array4Nth = [
    'a',
    'b',
    'c',
    'd',
  ];

  array4Pull = [
    'a',
    'b',
    'c',
    'a',
    'b',
    'c',
  ];

  array4PullAllBy = [
    [
      { 'x': 1 },
      { 'x': 2 },
      { 'x': 3 },
      { 'x': 1 },
    ],
    [
      { 'x': 1 },
      { 'x': 3 },
    ],
  ];

  array4PullAllWith = [
    [
      { 'x': 1, 'y': 2 },
      { 'x': 3, 'y': 4 },
      { 'x': 5, 'y': 6 },
    ],
    [{ 'x': 3, 'y': 4 }],
  ];

  array4PullAt = {
    0: [
      'a',
      'b',
      'c',
      'd',
    ],
    1: [
      1,
      3,
    ],
  };

  array4Remove = [
    1,
    2,
    3,
    4,
  ];

  array4Reverse = [
    1,
    2,
    3,
  ];

  array4Slice = [
    1,
    2,
    3,
    4,
    5,
  ];

  array4SortedIndex = [
    30,
    50,
  ];

  array4SortedIndexBy = {
    0: [
      { x: 4 },
      { x: 5 },
    ],
    1: { x: 4 },
  };

  array4SortedIndexOf = [
    4,
    5,
    5,
    5,
    6,
  ];

  array4SortedLastIndex = [
    4,
    5,
    5,
    5,
    6,
  ];

  array4SortedLastIndexBy = {
    0: [
      { x: 4 },
      { x: 5 },
    ],
    1: { x: 4 },
  };

  array4SortedLastIndexOf = [
    4,
    5,
    5,
    5,
    6,
  ];

  array4SortedUniq = [
    1,
    1,
    2,
  ];

  array4SortedUniqBy = [
    1.1,
    1.2,
    2.3,
    2.4,
  ];

  array4Tail = [
    1,
    2,
    3,
  ];

  array4Take = [
    1,
    2,
    3,
  ];

  array4TakeWhile = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false },
  ];

  array4Union = [
    [2],
    [
      1,
      2,
    ],
  ];

  array4UnionBy = [
    [2.1],
    [
      1.2,
      2.3,
    ],
  ];

  array4UnionWith = [
    { 'x': 1, 'y': 2 },
    { 'x': 2, 'y': 1 },
  ];
  otherArray4UnionWith = [
    { 'x': 1, 'y': 1 },
    { 'x': 1, 'y': 2 },
  ];

  array4Uniq = [
    2,
    1,
    2,
  ];

  array4UniqBy = [
    2.1,
    1.2,
    2.3,
  ];

  array4UniqWith = [
    { 'x': 1, 'y': 2 },
    { 'x': 2, 'y': 1 },
    { 'x': 1, 'y': 2 },
  ];

  array4Unzip = [
    [
      'a',
      1,
      true,
    ],
    [
      'b',
      2,
      false,
    ],
  ];

  array4UnzipWith = [
    [
      1,
      10,
      100,
    ],
    [
      2,
      20,
      200,
    ],
  ];

  array4Without = [
    2,
    1,
    2,
    3,
  ];

  array4Xor = [
    [
      2,
      1,
    ],
    [
      2,
      3,
    ],
  ];

  array4XorBy = [
    [
      2.1,
      1.2,
    ],
    [
      2.3,
      3.4,
    ],
  ];

  array4XorWith = [
    { 'x': 1, 'y': 2 },
    { 'x': 2, 'y': 1 },
  ];
  otherArray4XorWith = [
    { 'x': 1, 'y': 1 },
    { 'x': 1, 'y': 2 },
  ];

  array4Zip = [
    [
      'a',
      'b',
    ],
    [
      1,
      2,
    ],
    [
      true,
      false,
    ],
  ];

  array4ZipObject = [
    [
      'a',
      'b',
    ],
    [
      1,
      2,
    ],
  ];

  array4ZipObjectDeep = [
    [
      'a.b[0].c',
      'a.b[1].d',
    ],
    [
      1,
      2,
    ],
  ];

  array4ZipWith = [
    [
      1,
      2,
    ],
    [
      10,
      20,
    ],
    [
      100,
      200,
    ],
  ];

}
