import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

import * as Cleave from 'cleave.js';

@Directive({
  selector: 'input[cleave]',
})
export class NgxCleaveDirective implements OnInit {

  @Input() cleave: object;

  private _value: string;

  constructor (
    private elementRef: ElementRef,
  ) {
  }

  ngOnInit () {
    const el = this.elementRef.nativeElement;
    // tslint:disable-next-line: no-unused-expression
    new Cleave(el, {
      ...this.cleave,
      onValueChanged: ({ target }) => {
        if (target.value !== this._value) {
          this.dispatchEvent(el, 'input');
        }
      },
    });
  }

  @HostListener('input', ['$event.target.value'])
  onInput (value: string): void {
    this._value = value;
  }

  private dispatchEvent (el, eventType) {

    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);

  }

}
