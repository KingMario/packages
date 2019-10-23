/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  List,
  shuffle,
} from 'lodash';

@Pipe({
  name: 'shuffle',
})
export class ShufflePipe implements PipeTransform {

  transform<T> (collection: List<T> | null | undefined): T[] {
    return shuffle(collection);
  }

}
