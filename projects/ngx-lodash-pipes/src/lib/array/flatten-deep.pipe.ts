import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  flattenDeep,
  ListOfRecursiveArraysOrValues,
} from 'lodash';

@Pipe({
  name: 'flattenDeep',
})
export class FlattenDeepPipe implements PipeTransform {

  transform<T> (array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[] {
    return flattenDeep(array);
  }

}
