import {
  add,
  isEqual,
} from 'lodash';

export class Functions {

  boolean = Boolean;

  add = add;
  isEqual = isEqual;

  floor = Math.floor;

  split = String.prototype.split;

  inactive = (o) => !o.active;

  even = (n) => n % 2 === 0;
  odd = (n) => n % 2 === 1;

  accumulate = (a, b, c) => a + b + c;
  square = (n) => n * n;

  youngerThan40 = (o) => o.age < 40;

  duplicate = (n) => [
    n,
    n,
  ];

  deepDuplicate = (n) => [
    [
      [
        n,
        n,
      ],
    ],
  ];

  logValue = (value) => console.log(value);
  logKey = (value, key) => console.log(key);

  fromObjectCodeProperty = (o) => String.fromCharCode(o.code);

  groupByValue = (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
  };

  flatten = (flattened, other) => flattened.concat(other);

}
