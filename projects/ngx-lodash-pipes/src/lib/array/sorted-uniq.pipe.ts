import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  sortedUniq,
} from 'lodash';

@Pipe({
  name: 'sortedUniq',
})
export class SortedUniqPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
  ): T[] {
    return sortedUniq(array);
  }

}
