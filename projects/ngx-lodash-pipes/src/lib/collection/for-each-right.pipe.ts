/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  forEachRight,
  ObjectIterator,
} from 'lodash';

@Pipe({
  name: 'forEachRight',
})
export class ForEachRightPipe implements PipeTransform {

  transform<T extends object> (
    collection: T,
    iteratee?: ObjectIterator<T, any>,
  ): T {
    return forEachRight(collection, iteratee);
  }

}
