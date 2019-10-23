/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  findLast,
  List,
  ListIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'findLast',
})
export class FindLastPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
    fromIndex?: number,
  ): T | undefined {
    return findLast(collection, predicate, fromIndex);
  }

}
