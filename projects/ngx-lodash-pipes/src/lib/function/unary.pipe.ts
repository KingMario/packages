/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { unary } from 'lodash';

@Pipe({
  name: 'unary',
})
export class UnaryPipe implements PipeTransform {

  transform<T, TResult> (func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult {
    return unary(func);
  }

}
