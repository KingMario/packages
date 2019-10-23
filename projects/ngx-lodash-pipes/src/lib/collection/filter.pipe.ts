/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  filter,
  List,
  ListIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
  ): T[] {
    return filter(collection, predicate);
  }

}
