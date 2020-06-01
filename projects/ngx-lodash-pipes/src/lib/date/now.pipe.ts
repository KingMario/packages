/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { now } from 'lodash';

@Pipe({
  name: 'now',
})
export class NowPipe implements PipeTransform {

  transform (_?: any): number {
    return now();
  }

}
