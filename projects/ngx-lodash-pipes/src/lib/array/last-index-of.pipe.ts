/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  lastIndexOf,
  List,
} from 'lodash';

@Pipe({
  name: 'lastIndexOf',
})
export class LastIndexOfPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
    fromIndex?: true | number,
  ): number {
    return lastIndexOf(array, value, fromIndex);
  }

}
