/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  slice,
} from 'lodash';

@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    start?: number,
    end?: number,
  ): T[] {
    return slice(array, start, end);
  }

}
