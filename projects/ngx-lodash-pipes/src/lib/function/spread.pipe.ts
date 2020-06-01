/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { spread } from 'lodash';

@Pipe({
  name: 'spread',
})
export class SpreadPipe implements PipeTransform {

  transform<TResult> (
    func: (...args: any[]) => TResult,
    start: number,
  ): (...args: any[]) => TResult {
    return spread(func, start);
  }

}
