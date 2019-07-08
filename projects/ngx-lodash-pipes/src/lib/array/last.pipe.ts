import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  last,
  List,
} from 'lodash';

@Pipe({
  name: 'last',
})
export class LastPipe implements PipeTransform {

  transform<T> (array: List<T> | null | undefined): T | undefined {
    return last(array);
  }

}
