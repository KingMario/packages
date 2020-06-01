/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Many,
  rearg,
} from 'lodash';

@Pipe({
  name: 'rearg',
})
export class ReargPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    ...indexes: Array<Many<number>>
  ): (...args: any[]) => any {
    return rearg(func, ...indexes);
  }

}
