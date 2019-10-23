/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  compact,
  List,
} from 'lodash';

@Pipe({
  name: 'compact',
})
export class CompactPipe implements PipeTransform {

  transform<T> (array: List<T | null | undefined | false | '' | 0> | null | undefined): T[] {
    return compact(array);
  }

}
