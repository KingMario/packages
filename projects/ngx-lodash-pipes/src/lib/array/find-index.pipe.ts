import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  findIndex,
  List,
  ListIterateeCustom,
} from 'lodash';

@Pipe({
  name: 'findIndex',
})
export class FindIndexPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
    fromIndex?: number,
  ): number {
    return findIndex(array, predicate, fromIndex);
  }

}
