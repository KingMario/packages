import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  unionBy,
} from 'lodash';

@Pipe({
  name: 'unionBy',
})
export class UnionByPipe implements PipeTransform {

  transform<T> (
    arrays: List<T> | null | undefined,
    ...iteratee: any[]
  ): T[] {
    return unionBy(arrays, ...iteratee);
  }

}
