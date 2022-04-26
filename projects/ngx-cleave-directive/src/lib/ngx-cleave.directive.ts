import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

import Cleave from 'cleave.js';

@Directive({
  selector: 'input[cleave],textarea[cleave]',
})
export class NgxCleaveDirective implements OnInit, OnDestroy {

  @Input('cleave') set cleave (cleave: any) {

    this._cleave = cleave;

    this.setCleave();

  }

  private _cleave: any;
  private _cleaveInstance: Cleave;
  private _value: string;
  private _valueAccessor: ControlValueAccessor;
  private _writeValue: (value) => void;

  constructor (
    private elementRef: ElementRef,
    @Optional() private ngControl: NgControl,
  ) {
  }

  ngOnInit () {

    if (!this.ngControl) {

      console.warn('Note: The cleave directive should be used with the ngModel, formControl or formControlName directives.');

      return;

    }

    this._valueAccessor = this.ngControl.valueAccessor;

    this._writeValue = this._valueAccessor.writeValue;
    this._valueAccessor.writeValue = (value) => {

      if (this._writeValue) {
        this._writeValue.call(this._valueAccessor, value);
      }

      this.setCleave();

    };

  }

  ngOnDestroy () {

    if (this._valueAccessor && this._writeValue) {

      this._valueAccessor.writeValue = this._writeValue;

    }

    if (this._cleaveInstance) {

      this._cleaveInstance.destroy();

    }

  }

  @HostListener('input', ['$event.target.value'])
  onInput (value: string): void {

    this._value = value;

  }

  private setCleave () {

    if (this._cleaveInstance) {

      this._cleaveInstance.destroy();

    }

    const el = this.elementRef.nativeElement;
    this._cleaveInstance = new Cleave(el, {
      ...this._cleave,
      onValueChanged: ({ target }) => {
        if (target.value !== this._value) {

          this.dispatchEvent(el, 'input');

        }

        if (this._cleave.onValueChanged && typeof this._cleave.onValueChanged === 'function') {

          this._cleave.onValueChanged({ target });

        }
      },
    });

    // hack for model -> view cleave
    setTimeout(() => this.dispatchEvent(el, 'input'), 0);

  }

  private dispatchEvent (el, eventType) {

    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);

  }

}
