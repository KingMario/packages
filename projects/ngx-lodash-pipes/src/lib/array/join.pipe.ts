/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  join,
  List,
} from 'lodash';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {

  transform<T> (
    array: List<any> | null | undefined,
    separator?: string,
  ): string {
    return join(array, separator);
  }

}
