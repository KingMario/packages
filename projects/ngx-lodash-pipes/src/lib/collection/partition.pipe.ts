/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  partition,
  ValueIteratorTypeGuard,
} from 'lodash';

@Pipe({
  name: 'partition',
})
export class PartitionPipe implements PipeTransform {

  transform<T, U extends T> (
    collection: List<T> | null | undefined,
    callback: ValueIteratorTypeGuard<T, U>,
  ): [U[], Array<Exclude<T, U>>] {
    return partition(collection, callback);
  }

}
