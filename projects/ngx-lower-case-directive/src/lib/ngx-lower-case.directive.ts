import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'input[lowerCase]:not([upperCase])',
})
export class NgxLowerCaseDirective {

  @Input() lowerCase: string;

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

  private convertValue (el, value) {

    el.value = value.toLowerCase();

    this.dispatchEvent(el, 'input');

  }

  @HostListener('blur', ['$event.target', '$event.target.value'])
  onBlur (el: any, value: string): void {

    if ((!this.lowerCase || 'blur' === this.lowerCase) && 'function' === typeof value.toLowerCase && value.toLowerCase() !== value) {

      this.convertValue(el, value);
      this.dispatchEvent(el, 'blur'); // in case updateOn is set to blur

    }

  }

  @HostListener('input', ['$event.target', '$event.target.value'])
  onInput (el: any, value: string): void {

    if (!this.lowerCase && 'function' === typeof value.toLowerCase && value.toLowerCase() !== value) {

      let { start, end } = this.getCaret(el);

      if (value[0] === ' ' && start === 1 && end === 1) {

        start = 0;
        end = 0;

      }

      this.convertValue(el, value);

      this.setCaret(el, start, end);

    }

  }

}
