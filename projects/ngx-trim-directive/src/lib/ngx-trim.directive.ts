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

@Directive({
  selector: 'input[trim],textarea[trim]',
})
export class NgxTrimDirective implements OnInit, OnDestroy {

  private _trim: '' | 'blur' | false;
  @Input('trim')
  public set trim (trimOption: '' | 'blur' | false) {
    if (trimOption !== '' && trimOption !== 'blur' && trimOption !== false) {
      console.warn(`Note: The value ${JSON.stringify(trimOption)} is not assignable to the trim attribute.
        Only blank string (""), "blur" or false is allowed.`);

      this._trim = false;
      return;
    }

    this._trim = trimOption;

    const elem = this.elementRef.nativeElement;
    const eleValue = elem.value;
    if (trimOption !== false && eleValue !== eleValue.trim()) {
      // initially trim the value if needed
      NgxTrimDirective.dispatchEvent(elem, 'blur');
    }
  }

  public get trim () {
    return this._trim;
  }

  @Input() trimOnWriteValue: boolean = true;

  private _valueAccessor: ControlValueAccessor;
  private _writeValue: (value) => void;

  constructor (
    private elementRef: ElementRef,
    @Optional() private ngControl: NgControl,
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

  ngOnInit (): void {

    if (!this.ngControl) {

      console.warn('Note: The trim directive should be used with one of ngModel, formControl or formControlName directives.');

      return;

    }

    this._valueAccessor = this.ngControl.valueAccessor;

    this._writeValue = this._valueAccessor.writeValue;
    this._valueAccessor.writeValue = (value) => {
      const _value =
        this.trim === false || !value || !value.trim || !this.trimOnWriteValue
          ? value
          : value && value.trim();

      if (this._writeValue) {
        this._writeValue.call(this._valueAccessor, _value);
      }

      if (value !== _value) {
        if (this._valueAccessor['onChange']) {
          this._valueAccessor['onChange'](_value);
        }

        if (this._valueAccessor['onTouched']) {
          this._valueAccessor['onTouched']();
        }
      }

    };

  }

  ngOnDestroy (): void {

    if (this._valueAccessor && this._writeValue) {

      this._valueAccessor.writeValue = this._writeValue;

    }

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
