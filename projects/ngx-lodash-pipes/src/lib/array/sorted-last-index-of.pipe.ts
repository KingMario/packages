/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedLastIndexOf,
} from 'lodash';

@Pipe({
  name: 'sortedLastIndexOf',
})
export class SortedLastIndexOfPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
  ): number {
    return sortedLastIndexOf(array, value);
  }

}
