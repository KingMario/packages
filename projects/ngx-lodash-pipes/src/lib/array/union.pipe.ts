import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  union,
} from 'lodash';

@Pipe({
  name: 'union',
})
export class UnionPipe implements PipeTransform {

  transform<T> (...arrays: Array<List<T> | null | undefined>): T[] {
    return union(...arrays);
  }

}
