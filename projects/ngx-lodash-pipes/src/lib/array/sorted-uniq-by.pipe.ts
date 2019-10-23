/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedUniqBy,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'sortedUniqBy',
})
export class SortedUniqByPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    iteratee: ValueIteratee<T>,
  ): T[] {
    return sortedUniqBy(array, iteratee);
  }

}
