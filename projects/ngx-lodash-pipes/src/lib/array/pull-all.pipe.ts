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
    const array4PullAll = [...array];

    return pullAll(array4PullAll, values);
  }

}
