/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  countBy,
  Dictionary,
  List,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'countBy',
})
export class CountByPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    iteratee?: ValueIteratee<T>,
  ): Dictionary<number> {
    return countBy(collection, iteratee);
  }

}
