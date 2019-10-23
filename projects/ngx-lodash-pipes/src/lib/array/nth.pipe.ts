/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  nth,
} from 'lodash';

@Pipe({
  name: 'nth',
})
export class NthPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    n?: number,
  ): T | undefined {
    return nth(array, n);
  }

}
