/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  findLastIndex,
  List,
  ListIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'findLastIndex',
})
export class FindLastIndexPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
    fromIndex?: number,
  ): number {
    return findLastIndex(array, predicate, fromIndex);
  }

}
