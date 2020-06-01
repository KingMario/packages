/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { after } from 'lodash';

@Pipe({
  name: 'after',
})
export class AfterPipe implements PipeTransform {

  transform<TFunc extends (...args: any[]) => any> (
    n: number,
    func: TFunc,
  ): TFunc {
    return after(n, func);
  }

}
