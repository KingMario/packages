/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { before } from 'lodash';

@Pipe({
  name: 'before',
})
export class BeforePipe implements PipeTransform {

  transform<TFunc extends (...args: any[]) => any> (
    n: number,
    func: TFunc,
  ): TFunc {
    return before(n, func);
  }

}
