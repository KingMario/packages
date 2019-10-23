/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  ObjectIterateeCustom,
  some,
} from 'lodash';

@Pipe({
  name: 'some',
})
export class SomePipe implements PipeTransform {

  transform<T extends object> (
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
  ): boolean {
    return some(collection, predicate);
  }

}
