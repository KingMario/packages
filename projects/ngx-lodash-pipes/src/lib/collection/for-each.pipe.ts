/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  forEach,
  ObjectIterator,
} from 'lodash';

@Pipe({
  name: 'forEach',
})
export class ForEachPipe implements PipeTransform {

  transform<T extends object> (
    collection: T,
    iteratee?: ObjectIterator<T, any>,
  ): T {
    return forEach(collection, iteratee);
  }

}
