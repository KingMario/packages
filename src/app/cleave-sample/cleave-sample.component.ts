import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import 'cleave.js/dist/addons/cleave-phone.cn.js';

@Component({
  selector: 'app-cleave-sample',
  templateUrl: './cleave-sample.component.html',
  styleUrls: ['./cleave-sample.component.scss'],
})
export class CleaveSampleComponent implements OnInit {

  constructor () {
  }

  readonly fieldA = new FormControl('', Validators.required);
  readonly fieldB = new FormControl('');

  readonly formA = new FormGroup({
    fieldA: this.fieldA,
    fieldB: this.fieldB,
  });

  ngOnInit () {
  }

  submit () {
    alert('to submit');
  }

}
