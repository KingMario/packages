import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  zipWith,
} from 'lodash';

@Pipe({
  name: 'zipWith',
})
export class ZipWithPipe implements PipeTransform {

  transform<T, TResult> (
    ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
  ): TResult[] {
    return zipWith(...iteratee);
  }

}
