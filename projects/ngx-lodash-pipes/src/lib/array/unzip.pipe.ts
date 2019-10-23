/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  unzip,
} from 'lodash';

@Pipe({
  name: 'unzip',
})
export class UnzipPipe implements PipeTransform {

  transform<T> (array: T[][] | List<List<T>> | null | undefined): T[][] {
    return unzip(array);
  }

}
