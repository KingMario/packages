import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'input[trim],textarea[trim]',
})
export class NgxTrimDirective {

  @Input() trim: string;

  private getCaret (el) {

    return {
      start: el.selectionStart,
      end: el.selectionEnd,
    };

  }

  private setCaret (el, start, end) {

    el.selectionStart = start;
    el.selectionEnd = end;

    el.focus();

  }

  private dispatchEvent (el, eventType) {

    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);

  }

  private trimValue (el, value) {

    el.value = value.trim();

    this.dispatchEvent(el, 'input');

  }

  @HostListener('blur', ['$event.target', '$event.target.value'])
  onBlur (el: any, value: string): void {

    if ((!this.trim || 'blur' === this.trim) && 'function' === typeof value.trim && value.trim() !== value) {

      this.trimValue(el, value);
      this.dispatchEvent(el, 'blur'); // in case updateOn is set to blur

    }

  }

  @HostListener('input', ['$event.target', '$event.target.value'])
  onInput (el: any, value: string): void {

    if (!this.trim && 'function' === typeof value.trim && value.trim() !== value) {

      let { start, end } = this.getCaret(el);

      if (value[0] === ' ' && start === 1 && end === 1) {

        start = 0;
        end = 0;

      }

      this.trimValue(el, value);

      this.setCaret(el, start, end);

    }

  }

}
