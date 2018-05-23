import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';

const msie = !!window['ActiveXObject'];

@Directive({
  selector: 'input[trim]',
})
export class NgxTrimDirective {

  @Input() trim: string;

  private getCaret (el) {
    let start, end;

    if (msie) {
      const selection = document['selection'];
      const val = el.value;
      let selectionRange = selection.createRange().duplicate();

      selectionRange.moveEnd('character', val.length);
      start = (!selectionRange.text ? val.length : val.lastIndexOf(selectionRange.text));
      selectionRange = selection.createRange().duplicate();
      selectionRange.moveStart('character', -val.length);
      end = selectionRange.text.length;
    } else {
      start = el.selectionStart;
      end = el.selectionEnd;
    }

    return {
      'start': start,
      'end': end,
      'cursor': start === end,
      'selection': start !== end,
    };

  }

  private setCaret (el, start, end) {

    if (msie) {
      const selRange = el.createTextRange();
      el.collapse(true);
      el.moveStart('character', start);
      el.moveEnd('character', end - start);
      el.select();
    } else {
      el.selectionStart = start;
      el.selectionEnd = end;
    }

    el.focus();

  }

  private trimValue(el, value) {

    el.value = value.trim();

    const event = document.createEvent('Event');
    event.initEvent('input', false, false);
    el.dispatchEvent(event);

  }

  @HostListener('blur', ['$event.target', '$event.target.value'])
  onBlur (el: any, value: string): void {

    if (!this.trim || 'blur' === this.trim && 'function' === typeof value.trim && value.trim() !== value) {
      this.trimValue(el, value);
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
