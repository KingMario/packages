import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  ListIteratee,
  takeRightWhile,
} from 'lodash';

@Pipe({
  name: 'takeRightWhile',
})
export class TakeRightWhilePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    predicate?: ListIteratee<T>,
  ): T[] {
    return takeRightWhile(array, predicate);
  }

}
