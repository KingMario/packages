import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  intersectionWith,
  List,
} from 'lodash';

@Pipe({
  name: 'intersectionWith',
})
export class IntersectionWithPipe implements PipeTransform {

  transform<T> (
    array?: List<T> | null,
    ...values: Array<List<T>>
  ): T[] {
    return intersectionWith(array, ...values);
  }

}
