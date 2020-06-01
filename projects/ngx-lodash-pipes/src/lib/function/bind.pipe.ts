/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { bind } from 'lodash';

@Pipe({
  name: 'bind',
})
export class BindPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    thisArg: any,
    ...argArray: any[]
  ): any {
    return bind(func, thisArg, ...argArray);
  }

}
