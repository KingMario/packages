/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Dictionary,
  includes,
  List,
  NumericDictionary,
} from 'lodash';

@Pipe({
  name: 'includes',
})
export class IncludesPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined | string,
    target: T | string,
    fromIndex?: number,
  ): boolean {
    if (typeof collection === 'string') {
      return includes(collection, target, fromIndex);
    } else {
      return includes(collection, target, fromIndex);
    }
  }

}
