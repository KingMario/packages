/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { delay } from 'lodash';

@Pipe({
  name: 'delay',
})
export class DelayPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    wait: number,
    ...args: any[]
  ): number {
    return delay(func, wait, ...args);
  }

}
