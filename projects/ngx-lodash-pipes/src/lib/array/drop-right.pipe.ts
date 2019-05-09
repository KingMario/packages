import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  dropRight,
  List,
} from 'lodash';

@Pipe({
  name: 'dropRight',
})
export class DropRightPipe implements PipeTransform {

  transform<T> (array: List<T> | null | undefined, n?: number): T[] {
    return dropRight(array, n);
  }

}
