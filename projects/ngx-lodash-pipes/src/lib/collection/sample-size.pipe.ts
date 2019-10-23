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
  sampleSize,
} from 'lodash';

@Pipe({
  name: 'sampleSize',
})
export class SampleSizePipe implements PipeTransform {

  transform<T> (
    collection: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined,
    n?: number,
  ): T[] {
    return sampleSize(collection, n);
  }

}
