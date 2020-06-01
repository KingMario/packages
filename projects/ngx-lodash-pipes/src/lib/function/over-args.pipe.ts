/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Many,
  overArgs,
} from 'lodash';

@Pipe({
  name: 'overArgs',
})
export class OverArgsPipe implements PipeTransform {

  transform (
    func: (...args: any[]) => any,
    ...transforms: Array<Many<(...args: any[]) => any>>
  ): (...args: any[]) => any {
    return overArgs(func, ...transforms);
  }

}
