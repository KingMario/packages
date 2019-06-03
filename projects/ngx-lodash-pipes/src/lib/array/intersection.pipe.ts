import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  intersection,
  List,
} from 'lodash';

@Pipe({
  name: 'intersection',
})
export class IntersectionPipe implements PipeTransform {

  transform<T> (...arrays: Array<List<T>>): T[] {
    return intersection(...arrays);
  }

}
