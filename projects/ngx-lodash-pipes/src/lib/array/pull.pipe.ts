/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { pull } from 'lodash';

@Pipe({
  name: 'pull',
})
export class PullPipe implements PipeTransform {

  transform<T> (
    array: T[],
    ...values: T[]
  ): T[] {
    // tslint:disable-next-line: prefer-const
    let array4Pull = [...array];

    return pull(array4Pull, ...values); // pull returns the mutated array
  }

}
