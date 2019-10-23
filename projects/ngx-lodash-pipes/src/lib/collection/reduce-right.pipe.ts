/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  MemoListIterator,
  reduceRight,
} from 'lodash';

@Pipe({
  name: 'reduceRight',
})
export class ReduceRightPipe implements PipeTransform {

  transform<T, TResult> (
    collection: T[] | null | undefined,
    callback: MemoListIterator<T, TResult, T[]>,
    accumulator: TResult,
  ): TResult {
    return reduceRight(collection, callback, accumulator);
  }

}
