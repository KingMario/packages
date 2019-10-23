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
  map,
} from 'lodash';

@Pipe({
  name: 'map',
})
export class MapPipe implements PipeTransform {

  transform<T, TResult> (
    collection: List<T> | null | undefined,
    iteratee: ListIterator<T, TResult>,
  ): TResult[] {
    return map(collection, iteratee);
  }

}
