/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { once } from 'lodash';

@Pipe({
  name: 'once',
})
export class OncePipe implements PipeTransform {

  transform<T extends (...args: any[]) => any> (func: T): T {
    return once(func);
  }

}
