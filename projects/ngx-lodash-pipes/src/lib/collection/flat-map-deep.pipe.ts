/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  flatMapDeep,
  List,
  ListIterator,
  ListOfRecursiveArraysOrValues,
} from 'lodash';

@Pipe({
  name: 'flatMapDeep',
})
export class FlatMapDeepPipe implements PipeTransform {

  transform<T, TResult> (
    collection: List<T> | null | undefined,
    iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
  ): TResult[] {
    return flatMapDeep(collection, iteratee);
  }

}
