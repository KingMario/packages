/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { curry } from 'lodash';

@Pipe({
  name: 'curry',
})
export class CurryPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    n: number,
  ): any {
    return curry(func, n);
  }

}
