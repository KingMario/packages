import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  flatten,
  List,
  Many,
} from 'lodash';

@Pipe({
  name: 'flatten',
})
export class FlattenPipe implements PipeTransform {

  transform<T> (array: List<Many<T>> | null | undefined): T[] {
    return flatten(array);
  }

}
