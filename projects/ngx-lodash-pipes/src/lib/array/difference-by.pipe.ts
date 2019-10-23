/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  differenceBy,
  List,
} from 'lodash';

@Pipe({
  name: 'differenceBy',
})
export class DifferenceByPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    ...values: Array<List<T>>
  ): T[] {
    return differenceBy(array, ...values);
  }

}
