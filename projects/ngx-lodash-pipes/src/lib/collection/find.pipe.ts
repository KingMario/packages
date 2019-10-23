/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  find,
  List,
  ListIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'find',
})
export class FindPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
    fromIndex?: number,
  ): T | undefined {
    return find(collection, predicate, fromIndex);
  }

}
