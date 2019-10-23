/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  zip,
} from 'lodash';

@Pipe({
  name: 'zip',
})
export class ZipPipe implements PipeTransform {

  transform<T> (...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>> {
    return zip(...arrays);
  }

}
