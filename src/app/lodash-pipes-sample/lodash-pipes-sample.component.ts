import {
  Component,
  OnInit,
} from '@angular/core';
import { ArraysAndFunctions } from './array-pipe-samples/arrays-and-functions';

@Component({
  selector: 'app-lodash-pipes-sample',
  templateUrl: './lodash-pipes-sample.component.html',
  styleUrls: ['./lodash-pipes-sample.component.scss'],
})
export class LodashPipesSampleComponent extends ArraysAndFunctions implements OnInit {

  constructor () {
    super();
  }

  ngOnInit () {
  }

}
