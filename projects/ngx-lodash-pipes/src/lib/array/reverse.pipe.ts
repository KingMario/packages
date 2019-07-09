import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { reverse } from 'lodash';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {

  transform<T> (
    array: T[],
  ): T[] {
    // tslint:disable-next-line: prefer-const
    let array4Reverse = [...array];

    return reverse(array4Reverse); // reverse returns the mutated array
  }

}
