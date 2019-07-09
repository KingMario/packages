import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  ListIteratee,
  remove,
} from 'lodash';

@Pipe({
  name: 'remove',
})
export class RemovePipe implements PipeTransform {

  transform<T> (
    array: T[],
    predicate?: ListIteratee<T>,
  ): T[] {
    // tslint:disable-next-line: prefer-const
    let array4Remove = [...array];

    remove(array4Remove, predicate); // remove returns an array of the removed elements

    return array4Remove;
  }

}
