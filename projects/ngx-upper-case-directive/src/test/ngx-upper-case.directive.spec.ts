import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NgxUpperCaseDirective } from '../lib';

@Component({
  template: `
    <input type="text" #input1 [(ngModel)]="value" upperCase>
    <div [formGroup]="formA">
      <input type="text" #input2 formControlName="fieldA" upperCase="blur">
    </div>
    <div [formGroup]="formB">
      <input type="text" #input3 formControlName="fieldB" upperCase="blur">
      <input type="text" #input4 formControlName="fieldC" upperCase>
    </div>
  `,
})
class TestComponent {
  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;

  readonly fieldA = new FormControl('');
  readonly formA = new FormGroup({
    fieldA: this.fieldA,
  });

  readonly fieldB = new FormControl('');
  readonly fieldC = new FormControl('');
  readonly formB = new FormGroup({
    fieldB: this.fieldB,
    fieldC: this.fieldC,
  }, {
    updateOn: 'blur',
  });

  value = '';
}

describe('NgxLowerCaseDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        NgxUpperCaseDirective,
        TestComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should convert the value of input1 on input or blur', () => {
    const el1 = component.input1.nativeElement;

    el1.value = 'ngxUpperCaseDirective';
    el1.dispatchEvent(new Event('input'));
    expect(el1.value).toBe('NGXUPPERCASEDIRECTIVE');
    expect(component.value).toBe('NGXUPPERCASEDIRECTIVE');

    el1.value = 'ngxUpperCaseDirective';
    el1.dispatchEvent(new Event('blur'));
    expect(el1.value).toBe('NGXUPPERCASEDIRECTIVE');
    expect(component.value).toBe('NGXUPPERCASEDIRECTIVE');
  });

  it('should not convert the value of input2 on input', () => {
    const el2 = component.input2.nativeElement;

    el2.value = 'ngxUpperCaseDirective';
    el2.dispatchEvent(new Event('input'));
    expect(el2.value).toBe('ngxUpperCaseDirective');
    expect(component.fieldA.value).toBe('ngxUpperCaseDirective');
  });

  it('should convert the value of input2 on blur', () => {
    const el2 = component.input2.nativeElement;

    el2.value = 'ngxUpperCaseDirective';
    el2.dispatchEvent(new Event('blur'));
    expect(el2.value).toBe('NGXUPPERCASEDIRECTIVE');
    expect(component.fieldA.value).toBe('NGXUPPERCASEDIRECTIVE');
  });

  it('should not update the value of fieldB on input', () => {
    const el3 = component.input3.nativeElement;

    el3.value = 'ngxUpperCaseDirective';
    el3.dispatchEvent(new Event('input'));
    expect(el3.value).toBe('ngxUpperCaseDirective');
    expect(component.fieldB.value).toBe('');

  });

  it('should convert the value of input3 on blur', () => {
    const el3 = component.input3.nativeElement;

    el3.value = 'ngxUpperCaseDirective';
    el3.dispatchEvent(new Event('blur'));
    expect(el3.value).toBe('NGXUPPERCASEDIRECTIVE');
    expect(component.fieldB.value).toBe('NGXUPPERCASEDIRECTIVE');
  });

  it('should not update the value of fieldC on input', () => {
    const el4 = component.input4.nativeElement;

    el4.value = 'ngxUpperCaseDirective';
    el4.dispatchEvent(new Event('input'));
    expect(el4.value).toBe('NGXUPPERCASEDIRECTIVE');
    expect(component.fieldC.value).toBe('');

  });

  it('should convert the value of input4 on blur', () => {
    const el4 = component.input4.nativeElement;

    el4.value = 'ngxUpperCaseDirective';
    el4.dispatchEvent(new Event('blur'));
    expect(el4.value).toBe('NGXUPPERCASEDIRECTIVE');
    expect(component.fieldC.value).toBe('NGXUPPERCASEDIRECTIVE');
  });

});
