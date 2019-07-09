import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedIndex,
} from 'lodash';

@Pipe({
  name: 'sortedIndex',
})
export class SortedIndexPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
  ): number {
    return sortedIndex(array, value);
  }

}
