/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  takeRight,
} from 'lodash';

@Pipe({
  name: 'takeRight',
})
export class TakeRightPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    n?: number,
  ): T[] {
    return takeRight(array, n);
  }

}
