/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { curryRight } from 'lodash';

@Pipe({
  name: 'curryRight',
})
export class CurryRightPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    n: number,
  ): any {
    return curryRight(func, n);
  }

}
