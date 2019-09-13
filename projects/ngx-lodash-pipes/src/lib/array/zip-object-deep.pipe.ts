import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  PropertyPath,
  zipObjectDeep,
} from 'lodash';

@Pipe({
  name: 'zipObjectDeep',
})
export class ZipObjectDeepPipe implements PipeTransform {

  transform (
    paths?: List<PropertyPath>,
    values?: List<any>,
  ): object {
    return zipObjectDeep(paths, values);
  }

}
