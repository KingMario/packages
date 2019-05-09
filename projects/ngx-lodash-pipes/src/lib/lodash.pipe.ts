import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import * as _ from 'lodash';

@Pipe({
  name: '_',
})
export class LodashPipe implements PipeTransform {

  transform (
    value: any,
    lodashMemberName: string,
    ...args: any[]
  ): any {
    const func = _[lodashMemberName];
    return _.isFunction(func) ? func(value, ...args) : value;
  }

}
