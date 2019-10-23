/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  flatMapDepth,
  List,
  ListIterator,
  ListOfRecursiveArraysOrValues,
} from 'lodash';

@Pipe({
  name: 'flatMapDepth',
})
export class FlatMapDepthPipe implements PipeTransform {

  transform<T, TResult> (
    collection: List<T> | null | undefined,
    iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
    depth?: number,
  ): TResult[] {
    return flatMapDepth(collection, iteratee, depth);
  }

}
