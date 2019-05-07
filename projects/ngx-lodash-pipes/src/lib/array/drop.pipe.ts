import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  drop,
  List,
} from 'lodash';

@Pipe({
  name: 'drop',
})
export class DropPipe implements PipeTransform {

  transform<T>(array: List<T> | null | undefined, n?: number): T[] {
    return drop(array, n);
  }

}
