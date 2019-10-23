/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  every,
  ObjectIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'every',
})
export class EveryPipe implements PipeTransform {

  transform<T extends object> (
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
  ): boolean {
    return every(collection, predicate);
  }

}
