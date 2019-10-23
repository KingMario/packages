/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  ListIterator,
  Many,
  NotVoid,
  orderBy,
} from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    iteratees?: Many<ListIterator<T, NotVoid>>,
    orders?: Many<boolean | 'asc' | 'desc'>,
  ): T[] {
    return orderBy(collection, iteratees, orders);
  }

}
