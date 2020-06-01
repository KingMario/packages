/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Cancelable,
  debounce,
  DebounceSettings,
} from 'lodash';

@Pipe({
  name: 'debounce',
})
export class DebouncePipe implements PipeTransform {

  transform<T extends (...args: any[]) => any> (
    func: T,
    wait?: number,
    options?: DebounceSettings,
  ): T & Cancelable {
    return debounce(func, wait, options);
  }

}
