/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  flatMap,
  List,
  ListIterator,
  Many,
} from 'lodash';

@Pipe({
  name: 'flatMap',
})
export class FlatMapPipe implements PipeTransform {

  transform<T, TResult> (
    collection: List<T> | null | undefined,
    iteratee: ListIterator<T, Many<TResult>>,
  ): TResult[] {
    return flatMap(collection, iteratee);
  }

}
