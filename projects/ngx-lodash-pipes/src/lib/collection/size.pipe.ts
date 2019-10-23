/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { size } from 'lodash';

@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {

  transform (collection: object | string | null | undefined): number {
    return size(collection);
  }

}
