import {
  Component,
  OnInit,
} from '@angular/core';

import { isEqual } from 'lodash';

@Component({
  selector: 'app-lodash-pipes-sample',
  templateUrl: './lodash-pipes-sample.component.html',
  styleUrls: ['./lodash-pipes-sample.component.scss'],
})
export class LodashPipesSampleComponent implements OnInit {

  constructor () {
  }

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
  floorIteratee = Math.floor;

  array4DifferenceWith = [
    { 'x': 1, 'y': 2 },
    { 'x': 2, 'y': 1 },
  ];
  otherArray4DifferenceWith = [{ 'x': 1, 'y': 2 }];
  isEqual = isEqual;

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

  array4Every = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': false },
  ];

  func4DropWhile = (o) => !o.active;

  ngOnInit () {
  }

}
