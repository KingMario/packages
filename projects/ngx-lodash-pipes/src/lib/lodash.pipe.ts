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
    let newValue = value;
    const func = _[lodashMemberName];

    // array rewriting members
    const arrayRewritingMembers = [
      'fill',
    ];
    if (arrayRewritingMembers.indexOf(lodashMemberName) > -1) {
      // to avoid ExpressionChangedAfterItHasBeenCheckedError
      newValue = [...value];
    }

    return _.isFunction(func) ? func(newValue, ...args) : value;
  }

}
