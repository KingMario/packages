import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  pullAllBy,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'pullAllBy',
})
export class PullAllByPipe implements PipeTransform {

  transform<T> (
    array: T[],
    values?: List<T>,
    iteratee?: ValueIteratee<T>,
  ): T[] {
    // tslint:disable-next-line: prefer-const
    let array4PullAllBy = [...array];

    return pullAllBy(array4PullAllBy, values, iteratee); // pullAllBy returns the mutated array
  }

}
