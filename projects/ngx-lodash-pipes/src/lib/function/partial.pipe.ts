/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { partial } from 'lodash';

@Pipe({
  name: 'partial',
})
export class PartialPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    ...args: any[]
  ): (...args: any[]) => any {
    // @ts-ignore
    return partial(func, ...args);
  }

}
