import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedLastIndexBy,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'sortedLastIndexBy',
})
export class SortedLastIndexByPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
    iteratee?: ValueIteratee<T>,
  ): number {
    return sortedLastIndexBy(array, value, iteratee);
  }

}
