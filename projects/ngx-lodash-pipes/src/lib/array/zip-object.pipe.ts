import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Dictionary,
  List,
  PropertyName,
  zipObject,
} from 'lodash';

@Pipe({
  name: 'zipObject',
})
export class ZipObjectPipe implements PipeTransform {

  transform<T> (
    props: List<PropertyName>,
    values: List<T>,
  ): Dictionary<T> {
    return zipObject(props, values);
  }

}
