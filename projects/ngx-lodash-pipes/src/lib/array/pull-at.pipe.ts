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
    const array4PullAt = [...array];

    pullAt(array4PullAt, ...indexes);

    return array4PullAt;
  }

}
