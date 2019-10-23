/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  concat,
  Many,
} from 'lodash';

@Pipe({
  name: 'concat',
})
export class ConcatPipe implements PipeTransform {

  transform<T> (array: Many<T>, ...values: Array<Many<T>>): T[] {
    return concat(array, ...values);
  }

}
