/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Comparator,
  List,
  uniqWith,
} from 'lodash';

@Pipe({
  name: 'uniqWith',
})
export class UniqWithPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    comparator?: Comparator<T>,
  ): T[] {
    return uniqWith(array, comparator);
  }

}
