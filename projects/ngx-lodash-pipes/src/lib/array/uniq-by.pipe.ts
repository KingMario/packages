/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  uniqBy,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'uniqBy',
})
export class UniqByPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    iteratee: ValueIteratee<T>,
  ): T[] {
    return uniqBy(array, iteratee);
  }

}
