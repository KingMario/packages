/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  pullAll,
} from 'lodash';

@Pipe({
  name: 'pullAll',
})
export class PullAllPipe implements PipeTransform {

  transform<T> (
    array: T[],
    values?: List<T>,
  ): T[] {
    // tslint:disable-next-line: prefer-const
    let array4PullAll = [...array];

    return pullAll(array4PullAll, values); // pullALl returns the mutated array
  }

}
