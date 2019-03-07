import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'input[upperCase]:not([lowerCase]),textarea[upperCase]:not([lowerCase])',
})
export class NgxUpperCaseDirective {

  @Input() upperCase: string;

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

    el.value = value.toUpperCase();

    this.dispatchEvent(el, 'input');

  }

  @HostListener('blur', ['$event.target', '$event.target.value'])
  onBlur (el: any, value: string): void {

    if ((!this.upperCase || 'blur' === this.upperCase) && 'function' === typeof value.toUpperCase && value.toUpperCase() !== value) {

      this.convertValue(el, value);
      this.dispatchEvent(el, 'blur'); // in case updateOn is set to blur

    }

  }

  @HostListener('input', ['$event.target', '$event.target.value'])
  onInput (el: any, value: string): void {

    if (!this.upperCase && 'function' === typeof value.toUpperCase && value.toUpperCase() !== value) {

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
