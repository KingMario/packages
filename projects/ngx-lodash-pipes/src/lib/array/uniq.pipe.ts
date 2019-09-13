import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  uniq,
} from 'lodash';

@Pipe({
  name: 'uniq',
})
export class UniqPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
  ): T[] {
    return uniq(array);
  }

}
