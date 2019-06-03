import {
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'input[trim],textarea[trim]',
})
export class NgxTrimDirective {

  private _trim: '' | 'blur' | false;
  @Input('trim')
  public set trim (value: '' | 'blur' | false) {
    if (value !== '' && value !== 'blur' && value !== false) {
      console.warn(`Note: The value ${JSON.stringify(value)} is not assignable to the trim attribute.
        Only blank string (""), "blur" or false is allowed.`);

      this._trim = false;
      return;
    }

    this._trim = value;

    if (value !== false) {
      NgxTrimDirective.dispatchEvent(this.elementRef.nativeElement, 'blur');
    }
  }

  public get trim () {
    return this._trim;
  }

  constructor (
    private elementRef: ElementRef,
  ) {
  }

  private static getCaret (el) {

    return {
      start: el.selectionStart,
      end: el.selectionEnd,
    };

  }

  private static setCaret (el, start, end) {

    el.selectionStart = start;
    el.selectionEnd = end;

    el.focus();

  }

  private static dispatchEvent (el, eventType) {

    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);

  }

  private static trimValue (el, value) {

    el.value = value.trim();

    NgxTrimDirective.dispatchEvent(el, 'input');

  }

  @HostListener('blur', [
    '$event.target',
    '$event.target.value',
  ])
  onBlur (el: any, value: string): void {

    if (this.trim === false) {

      return;

    }

    if ((this.trim === '' || 'blur' === this.trim) && 'function' === typeof value.trim && value.trim() !== value) {

      NgxTrimDirective.trimValue(el, value);
      NgxTrimDirective.dispatchEvent(el, 'blur'); // in case updateOn is set to blur

    }

  }

  @HostListener('input', [
    '$event.target',
    '$event.target.value',
  ])
  onInput (el: any, value: string): void {

    if (this.trim === false) {

      return;

    }

    if (this.trim === '' && 'function' === typeof value.trim && value.trim() !== value) {

      let { start, end } = NgxTrimDirective.getCaret(el);

      if (value[0] === ' ' && start === 1 && end === 1) {

        start = 0;
        end = 0;

      }

      NgxTrimDirective.trimValue(el, value);

      NgxTrimDirective.setCaret(el, start, end);

    }

  }

}
