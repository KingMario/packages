/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

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
