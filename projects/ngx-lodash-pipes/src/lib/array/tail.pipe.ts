import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  tail,
} from 'lodash';

@Pipe({
  name: 'tail',
})
export class TailPipe implements PipeTransform {

  transform<T> (array: List<T> | null | undefined): T[] {
    return tail(array);
  }

}
