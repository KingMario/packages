/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { wrap } from 'lodash';

@Pipe({
  name: 'wrap',
})
export class WrapPipe implements PipeTransform {

  transform<T, TArgs, TResult> (
    value: T,
    wrapper: (value: T, ...args: TArgs[]) => TResult,
  ): (...args: TArgs[]) => TResult {
    return wrap(value, wrapper);
  }

}
