import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { pull } from 'lodash';

@Pipe({
  name: 'pull',
})
export class PullPipe implements PipeTransform {

  transform<T> (
    array: T[],
    ...values: T[]
  ): T[] {
    const array4Pull = [...array];

    return pull(array4Pull, ...values);
  }

}
