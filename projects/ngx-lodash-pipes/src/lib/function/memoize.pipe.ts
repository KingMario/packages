/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  memoize,
  MemoizedFunction,
} from 'lodash';

@Pipe({
  name: 'memoize',
})
export class MemoizePipe implements PipeTransform {

  transform<T extends (
    ...args: any[]) => any> (
    func: T,
    resolver?: (...args: any[]) => any,
  ): T & MemoizedFunction {
    return memoize(func, resolver);
  }

}
