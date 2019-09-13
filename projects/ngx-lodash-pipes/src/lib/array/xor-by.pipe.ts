import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  xorBy,
} from 'lodash';

@Pipe({
  name: 'xorBy',
})
export class XorByPipe implements PipeTransform {

  transform<T> (
    arrays: List<T> | null | undefined,
    ...iteratee: any[]
  ): T[] {
    return xorBy(arrays, ...iteratee);
  }

}
