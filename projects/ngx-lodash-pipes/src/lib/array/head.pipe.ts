import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  head,
  List,
} from 'lodash';

@Pipe({
  name: 'head',
})
export class HeadPipe implements PipeTransform {

  transform<T> (array: List<T> | null | undefined): T | undefined {
    return head(array);
  }

}
