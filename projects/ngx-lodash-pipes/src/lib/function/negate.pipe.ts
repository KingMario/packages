/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { negate } from 'lodash';

@Pipe({
  name: 'negate',
})
export class NegatePipe implements PipeTransform {

  transform (predicate: () => boolean): () => boolean {
    return negate(predicate);
  }

}
