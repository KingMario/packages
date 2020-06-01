/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { ary } from 'lodash';

@Pipe({
  name: 'ary',
})
export class AryPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    n?: number,
  ): (...args: any[]) => any {
    return ary(func, n);
  }

}
