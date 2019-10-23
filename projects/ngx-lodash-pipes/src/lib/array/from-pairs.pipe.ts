/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Dictionary,
  fromPairs,
  List,
  PropertyName,
} from 'lodash';

@Pipe({
  name: 'fromPairs',
})
export class FromPairsPipe implements PipeTransform {

  transform<T> (
    pairs: List<[PropertyName, T]> | null | undefined,
  ): Dictionary<T> {
    return fromPairs(pairs);
  }

}
