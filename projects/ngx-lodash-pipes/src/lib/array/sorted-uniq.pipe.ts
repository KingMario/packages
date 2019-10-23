/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedUniq,
} from 'lodash';

@Pipe({
  name: 'sortedUniq',
})
export class SortedUniqPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
  ): T[] {
    return sortedUniq(array);
  }

}
