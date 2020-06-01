/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import { Functions } from '../common/functions';

export class FunctionsAndFunctions extends Functions {

  getMyAddResult (myAdd: Function) {
    const augends = [
      1,
      3,
    ];
    const addends = [
      2,
      4,
    ];

    myAdd(augends[0], addends[0]);
    return myAdd(augends[1], addends[1]);
  }

}
