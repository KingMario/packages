/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  chunk,
  List,
} from 'lodash';

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {

  transform<T> (
    array: List<T> | null | undefined,
    size?: number,
  ): T[][] {
    return chunk(array, size);
  }

}
