/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { bindKey } from 'lodash';

@Pipe({
  name: 'bindKey',
})
export class BindKeyPipe implements PipeTransform {

  transform (
    object: object,
    key: string,
    ...argArray: any[]
  ): any {
    return bindKey(object, key, ...argArray);
  }

}
