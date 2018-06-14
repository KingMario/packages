import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

import * as Cleave from 'cleave.js';

@Directive({
  selector: 'input[cleave]',
})
export class NgxCleaveDirective implements OnInit {

  @Input() cleave: object;

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
        // TODO: make truncated property obtainable from the target or judged by the directive itself
        // const truncated = target.truncated || ...(?)
        if (target.value !== el.value /* && truncated */) {
          this.dispatchEvent(el, 'input');
        }
      },
    });
  }

  private dispatchEvent (el, eventType) {

    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);

  }

}
