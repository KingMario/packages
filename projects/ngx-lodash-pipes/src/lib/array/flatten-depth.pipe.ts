/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  flattenDepth,
  ListOfRecursiveArraysOrValues,
} from 'lodash';

@Pipe({
  name: 'flattenDepth',
})
export class FlattenDepthPipe implements PipeTransform {

  transform<T> (array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[] {
    return flattenDepth(array, depth);
  }

}
