/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  without,
} from 'lodash';

@Pipe({
  name: 'without',
})
export class WithoutPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    ...values: T[]
  ): T[] {
    return without(array, ...values);
  }

}
