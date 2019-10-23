/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  dropWhile,
  List,
  ListIteratee,
} from 'lodash';

@Pipe({
  name: 'dropWhile',
})
export class DropWhilePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    predicate?: ListIteratee<T>,
  ): T[] {
    return dropWhile(array, predicate);
  }

}
