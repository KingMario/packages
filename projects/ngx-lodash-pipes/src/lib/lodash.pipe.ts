import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import * as lodash from 'lodash';

@Pipe({
  name: '_',
})
export class LodashPipe implements PipeTransform {

  transform (
    value: any,
    lodashMemberName: string,
    ...args: any[]
  ): any {
    const func = lodash[lodashMemberName];
    return func ? func(value, ...args) : value;
  }

}
