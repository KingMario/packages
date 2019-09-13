import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  ListIteratee,
  takeWhile,
} from 'lodash';

@Pipe({
  name: 'takeWhile',
})
export class TakeWhilePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    predicate?: ListIteratee<T>,
  ): T[] {
    return takeWhile(array, predicate);
  }

}
