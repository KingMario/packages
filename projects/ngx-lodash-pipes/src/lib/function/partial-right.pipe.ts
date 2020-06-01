/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { partialRight } from 'lodash';

@Pipe({
  name: 'partialRight',
})
export class PartialRightPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    ...args: any[]
  ): (...args: any[]) => any {
    return partialRight(func, ...args);
  }

}
