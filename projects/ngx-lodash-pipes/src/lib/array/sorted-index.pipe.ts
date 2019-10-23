/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

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
