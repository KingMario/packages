import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedIndexBy,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'sortedIndexBy',
})
export class SortedIndexByPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
    iteratee?: ValueIteratee<T>,
  ): number {
    return sortedIndexBy(array, value, iteratee);
  }

}
