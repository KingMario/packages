import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  pullAllBy,
  ValueIteratee,
} from 'lodash';

@Pipe({
  name: 'pullAllBy',
})
export class PullAllByPipe implements PipeTransform {

  transform<T>(
    array: T[],
    values?: List<T>,
    iteratee?: ValueIteratee<T>
  ): T[] {
    const array4PullAllBy = [...array];

    return pullAllBy(array4PullAllBy, values, iteratee);
  }

}
