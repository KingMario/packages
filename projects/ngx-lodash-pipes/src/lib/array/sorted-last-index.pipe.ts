/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedLastIndex,
} from 'lodash';

@Pipe({
  name: 'sortedLastIndex',
})
export class SortedLastIndexPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
  ): number {
    return sortedLastIndex(array, value);
  }

}
