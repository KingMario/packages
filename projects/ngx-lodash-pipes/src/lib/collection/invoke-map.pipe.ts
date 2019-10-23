/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { invokeMap } from 'lodash';

@Pipe({
  name: 'invokeMap',
})
export class InvokeMapPipe implements PipeTransform {

  transform<TResult> (
    collection: object | null | undefined,
    method: string | ((...args: any[]) => TResult),
    ...args: any[]
  ): TResult[] {
    if (typeof method === 'string') {
      return invokeMap(collection, method, ...args);
    } else {
      return invokeMap(collection, method, ...args);
    }
  }

}
