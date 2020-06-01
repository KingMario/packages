/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { defer } from 'lodash';

@Pipe({
  name: 'defer',
})
export class DeferPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    ...args: any[]
  ): number {
    return defer(func, ...args);
  }

}
