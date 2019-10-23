/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  ListIteratee,
  Many,
  sortBy,
} from 'lodash';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    ...iteratees: Array<Many<ListIteratee<T>>>
  ): T[] {
    return sortBy(collection, ...iteratees);
  }

}
