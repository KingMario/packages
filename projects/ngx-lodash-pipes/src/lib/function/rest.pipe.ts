/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { rest } from 'lodash';

@Pipe({
  name: 'rest',
})
export class RestPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    start?: number,
  ): (...args: any[]) => any {
    return rest(func, start);
  }

}
