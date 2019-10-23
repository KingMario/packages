/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Many,
  pullAt,
} from 'lodash';

@Pipe({
  name: 'pullAt',
})
export class PullAtPipe implements PipeTransform {

  transform<T> (
    array: T[],
    ...indexes: Array<Many<number>>
  ): T[] {
    // tslint:disable-next-line: prefer-const
    let array4PullAt = [...array];

    pullAt(array4PullAt, ...indexes); // pullAt returns an array of the removed elements

    return array4PullAt;
  }

}
