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

    if (_.isFunction(func)) {
      const arrayMutationMembers = [
        'fill',
        'pull',
        'pullAll',
        'pullAllBy',
        'pullAllWith',
        'pullAt', // this function returns the values pulled,
        'remove', // this function returns the values removed,
        'reverse',
      ];
      if (arrayMutationMembers.indexOf(lodashMemberName) > -1) {
        // to avoid ExpressionChangedAfterItHasBeenCheckedError
        // tslint:disable-next-line: prefer-const
        let toBeMutated = [...value];

        func(toBeMutated, ...args);

        return toBeMutated;
      } else {
        return func(value, ...args);
      }
    }

    return value;
  }

}
