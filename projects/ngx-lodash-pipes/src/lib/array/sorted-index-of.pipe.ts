import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedIndexOf,
} from 'lodash';

@Pipe({
  name: 'sortedIndexOf',
})
export class SortedIndexOfPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
  ): number {
    return sortedIndexOf(array, value);
  }

}
