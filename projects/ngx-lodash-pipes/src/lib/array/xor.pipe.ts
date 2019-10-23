/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  xor,
} from 'lodash';

@Pipe({
  name: 'xor',
})
export class XorPipe implements PipeTransform {

  transform<T> (...arrays: Array<List<T> | null | undefined>): T[] {
    return xor(...arrays);
  }

}
