import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  fromPairs,
  List,
  PropertyName,
  Dictionary,
} from 'lodash';

@Pipe({
  name: 'fromPairs',
})
export class FrompairsPipe implements PipeTransform {

  transform<T>(
    pairs: List<[PropertyName, T]> | null | undefined
  ): Dictionary<T> {
    return fromPairs(pairs);
  }

}
