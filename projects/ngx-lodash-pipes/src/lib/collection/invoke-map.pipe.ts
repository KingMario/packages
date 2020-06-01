/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { invokeMap, cloneDeep } from 'lodash';

@Pipe({
  name: 'invokeMap',
})
export class InvokeMapPipe implements PipeTransform {

  transform<TResult> (
    collection: object | null | undefined,
    method: string | ((...args: any[]) => TResult),
    ...args: any[]
  ): TResult[] {
    // tslint:disable-next-line: prefer-const
    let collection4InvokeMap = cloneDeep(collection);

    if (typeof method === 'string') {
      return invokeMap(collection4InvokeMap, method, ...args);
    } else {
      return invokeMap(collection4InvokeMap, method, ...args);
    }
  }

}
