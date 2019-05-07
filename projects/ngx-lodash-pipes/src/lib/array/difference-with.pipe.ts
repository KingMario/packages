import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  differenceWith,
  List,
} from 'lodash';

@Pipe({
  name: 'differenceWith',
})
export class DifferenceWithPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    ...values: Array<List<T>>
  ): T[] {
    return differenceWith(array, ...values);
  }

}
