/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  unionWith,
} from 'lodash';

@Pipe({
  name: 'unionWith',
})
export class UnionWithPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    ...comparator: any[]
  ): T[] {
    return unionWith(array, ...comparator);
  }

}
