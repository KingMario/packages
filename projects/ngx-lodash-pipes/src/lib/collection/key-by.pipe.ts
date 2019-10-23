/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Dictionary,
  keyBy,
  List,
  PropertyName,
  ValueIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'keyBy',
})
export class KeyByPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    iteratee?: ValueIterateeCustom<T, PropertyName>,
  ): Dictionary<T> {
    return keyBy(collection, iteratee);
  }

}
