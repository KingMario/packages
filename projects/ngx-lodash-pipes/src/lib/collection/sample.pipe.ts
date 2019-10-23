/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Dictionary,
  List,
  NumericDictionary,
  sample,
} from 'lodash';

@Pipe({
  name: 'sample',
})
export class SamplePipe implements PipeTransform {

  transform<T> (
    collection: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined,
  ): T | undefined {
    return sample(collection);
  }

}
