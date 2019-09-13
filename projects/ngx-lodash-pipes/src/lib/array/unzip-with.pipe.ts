import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  unzipWith,
} from 'lodash';

@Pipe({
  name: 'unzipWith',
})
export class UnzipWithPipe implements PipeTransform {

  transform<T, TResult> (
    array: List<List<T>> | null | undefined,
    iteratee: (...values: T[]) => TResult,
  ): TResult[] {
    return unzipWith(array, iteratee);
  }

}
