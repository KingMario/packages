/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  dropRightWhile,
  List,
  ListIteratee,
} from 'lodash';

@Pipe({
  name: 'dropRightWhile',
})
export class DropRightWhilePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    predicate?: ListIteratee<T>,
  ): T[] {
    return dropRightWhile(array, predicate);
  }

}
