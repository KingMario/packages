/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  xorWith,
} from 'lodash';

@Pipe({
  name: 'xorWith',
})
export class XorWithPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    ...comparator: any[]
  ): T[] {
    return xorWith(array, ...comparator);
  }

}
