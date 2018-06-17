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

  value = '123412345123456';

  readonly fieldA = new FormControl('02588662222', Validators.required);
  readonly fieldB = new FormControl('4621082500002429');

  readonly formA = new FormGroup({
    fieldA: this.fieldA,
    fieldB: this.fieldB,
  });

  ngOnInit () {
  }

  setValue () {
    this.value = '4621002500002429';
  }

  submit () {
    alert('to submit');
  }

}
