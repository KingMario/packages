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

  array4Drop = [1, 2, 3];

  array4Every = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  ngOnInit () {
  }

}
