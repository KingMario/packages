import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  indexOf,
  List,
} from 'lodash';

@Pipe({
  name: 'indexOf',
})
export class IndexOfPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    value: T,
    fromIndex?: number,
  ): number {
    return indexOf(array, value, fromIndex);
  }

}
