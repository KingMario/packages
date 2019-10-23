import {
  Component,
  OnInit,
} from '@angular/core';

import { ArraysAndFunctions } from './arrays-and-functions';

@Component({
  selector: 'app-array-pipe-samples',
  templateUrl: './array-pipe-samples.component.html',
  styleUrls: ['./array-pipe-samples.component.scss'],
})
export class ArrayPipeSamplesComponent extends ArraysAndFunctions implements OnInit {

  constructor () {
    super();
  }

  ngOnInit () {
  }

}
