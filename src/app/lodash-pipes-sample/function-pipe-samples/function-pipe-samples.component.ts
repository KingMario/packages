/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  Component,
  OnInit,
} from '@angular/core';
import { FunctionsAndFunctions } from './functions-and-functions';

@Component({
  selector: 'app-function-pipe-samples',
  templateUrl: './function-pipe-samples.component.html',
  styleUrls: ['./function-pipe-samples.component.scss'],
})
export class FunctionPipeSamplesComponent extends FunctionsAndFunctions implements OnInit {

  constructor () {
    super();
  }

  ngOnInit () {
  }

}
