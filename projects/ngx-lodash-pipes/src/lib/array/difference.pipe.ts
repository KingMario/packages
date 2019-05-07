import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  difference,
  List,
} from 'lodash';

@Pipe({
  name: 'difference',
})
export class DifferencePipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    ...values: Array<List<T>>
  ): T[] {
    return difference(array, ...values);
  }

}
