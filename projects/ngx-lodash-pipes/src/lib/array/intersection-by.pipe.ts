/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  intersectionBy,
  List,
} from 'lodash';

@Pipe({
  name: 'intersectionBy',
})
export class IntersectionByPipe implements PipeTransform {

  transform<T> (
    array?: List<T> | null,
    ...values: Array<List<T>>
  ): T[] {
    return intersectionBy(array, ...values);
  }

}
