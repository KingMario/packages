import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import Cleave from 'cleave.js';
import { CleaveOptions } from 'cleave.js/options';

@Directive({
  selector: 'input[cleave],textarea[cleave]',
})
export class NgxCleaveDirective implements OnInit, OnDestroy {

  @Input('rawValue') rawValue = false;

  @Input('cleave') set cleave (cleave: CleaveOptions) {
    this._cleave = cleave;
    this.setCleave();
  }

  get cleave () {
    return this._cleave;
  }

  private _cleave!: CleaveOptions;
  private cleaveInstance?: Cleave;
  private viewToModelUpdate = this.ngControl?.viewToModelUpdate;

  constructor (
    private elementRef: ElementRef,
    @Optional() private ngControl: NgControl,
  ) {
    if (!this.ngControl) {
      throw new Error(
        'NgxCleaveDirective: should be used with one of the following form directives — ngModel, formControl or formControlName.');
    }
  }

  ngOnInit () {
    if (this.ngControl) {
      // the parameter is not used in the patched method,
      this.ngControl.viewToModelUpdate = (_: any) => {
        this.viewToModelUpdate?.call(
          this.ngControl,
          // update model with the value got from the Cleave instance
          this.rawValue
            ? this.cleaveInstance?.getRawValue()
            : this.cleaveInstance?.getFormattedValue(),
        );
      };
    }
  }

  ngOnDestroy () {
    if (this.ngControl) {
      this.ngControl.viewToModelUpdate = this.viewToModelUpdate;
    }

    this.cleaveInstance?.destroy();

  }

  private setCleave () {
    this.cleaveInstance?.destroy();

    this.cleaveInstance = new Cleave(
      this.elementRef.nativeElement,
      {
      ...this.cleave,
      onValueChanged: ({ target }) => {
        // trigger the update with an empty string
        this.ngControl.viewToModelUpdate('');

        if (this.cleave.onValueChanged && typeof this.cleave.onValueChanged === 'function') {
          this.cleave.onValueChanged({ target });
        }
      },
    });

    if (!this.rawValue) {
      // initially format the value, which will trigger onValueChanged to call viewToModelUpdate
      setTimeout(() => this.cleaveInstance?.setRawValue(this.ngControl.value), 0);
    }
  }

}
