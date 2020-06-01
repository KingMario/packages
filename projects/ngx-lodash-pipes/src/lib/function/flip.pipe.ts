/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { flip } from 'lodash';

@Pipe({
  name: 'flip',
})
export class FlipPipe implements PipeTransform {

  transform<T extends (...args: any[]) => any> (func: T): T {
    return flip(func);
  }

}
