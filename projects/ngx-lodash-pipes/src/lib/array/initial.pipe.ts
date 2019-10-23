/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  initial,
  List,
} from 'lodash';

@Pipe({
  name: 'initial',
})
export class InitialPipe implements PipeTransform {

  transform<T> (array: List<T> | null | undefined): T[] {
    return initial(array);
  }

}
