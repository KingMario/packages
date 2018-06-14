import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-upper-case-sample',
  templateUrl: './upper-case-sample.component.html',
  styleUrls: ['./upper-case-sample.component.scss'],
})
export class UpperCaseSampleComponent implements OnInit {

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
