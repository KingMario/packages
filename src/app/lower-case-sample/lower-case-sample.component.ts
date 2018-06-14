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
  selector: 'app-lower-case-sample',
  templateUrl: './lower-case-sample.component.html',
  styleUrls: ['./lower-case-sample.component.scss'],
})
export class LowerCaseSampleComponent implements OnInit {

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
