/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Cancelable,
  throttle,
  ThrottleSettings,
} from 'lodash';

@Pipe({
  name: 'throttle',
})
export class ThrottlePipe implements PipeTransform {

  transform<T extends (...args: any[]) => any> (
    func: T,
    wait?: number,
    options?: ThrottleSettings,
  ): T & Cancelable {
    return throttle(func, wait, options);
  }

}
