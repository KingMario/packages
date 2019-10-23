/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  MemoListIterator,
  reduce,
} from 'lodash';

@Pipe({
  name: 'reduce',
})
export class ReducePipe implements PipeTransform {

  transform<T, TResult> (
    collection: T[] | null | undefined,
    callback: MemoListIterator<T, TResult, T[]>,
    accumulator: TResult,
  ): TResult {
    return reduce(collection, callback, accumulator);
  }

}
