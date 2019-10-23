/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Dictionary,
  groupBy,
  List,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    iteratee?: ValueIteratee<T>,
  ): Dictionary<T[]> {
    return groupBy(collection, iteratee);
  }

}
