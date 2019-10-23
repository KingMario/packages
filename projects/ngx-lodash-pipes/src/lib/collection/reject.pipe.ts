/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  ListIterateeCustom,
  reject,
} from 'lodash';

@Pipe({
  name: 'reject',
})
export class RejectPipe implements PipeTransform {

  transform<T> (
    collection: List<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
  ): T[] {
    return reject(collection, predicate);
  }

}
