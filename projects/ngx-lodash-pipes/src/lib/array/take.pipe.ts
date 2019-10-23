/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  take,
} from 'lodash';

@Pipe({
  name: 'take',
})
export class TakePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    n?: number,
  ): T[] {
    return take(array, n);
  }

}
