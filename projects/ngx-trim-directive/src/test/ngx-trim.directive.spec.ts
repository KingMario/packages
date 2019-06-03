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

import { NgxTrimDirective } from '../lib';

@Component({
  template: `
    <input type="text" #input1 [(ngModel)]="value" trim>
    <div [formGroup]="formA">
      <input type="text" #input2 formControlName="fieldA" trim="blur">
    </div>
    <div [formGroup]="formB">
      <input type="text" #input3 formControlName="fieldB" trim="blur">
      <input type="text" #input4 formControlName="fieldC" [trim]="trimOption">
    </div>
  `,
})
class TestComponent {
  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;
  @ViewChild('input5', { static: false }) input5: ElementRef;

  trimOption: '' | 'blur' | false = '';
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

describe('NgxTrimDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        NgxTrimDirective,
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

  it('should trim the value of input1 on input or blur', () => {
    const el1 = component.input1.nativeElement;

    el1.value = 'ngxTrimDirective   ';
    el1.dispatchEvent(new Event('input'));
    expect(el1.value).toBe('ngxTrimDirective');
    expect(component.value).toBe('ngxTrimDirective');

    el1.value = '   ngxTrimDirective';
    el1.dispatchEvent(new Event('input'));
    expect(el1.value).toBe('ngxTrimDirective');
    expect(component.value).toBe('ngxTrimDirective');

    el1.value = '   ngxTrimDirective   ';
    el1.dispatchEvent(new Event('blur'));
    expect(el1.value).toBe('ngxTrimDirective');
    expect(component.value).toBe('ngxTrimDirective');
  });

  it('should not trim the value of input2 on input', () => {
    const el2 = component.input2.nativeElement;

    el2.value = 'ngxTrimDirective   ';
    el2.dispatchEvent(new Event('input'));
    expect(el2.value).toBe('ngxTrimDirective   ');
    expect(component.fieldA.value).toBe('ngxTrimDirective   ');
  });

  it('should trim the value of input2 on blur', () => {
    const el2 = component.input2.nativeElement;

    el2.value = 'ngxTrimDirective   ';
    el2.dispatchEvent(new Event('blur'));
    expect(el2.value).toBe('ngxTrimDirective');
    expect(component.fieldA.value).toBe('ngxTrimDirective');
  });

  it('should not update the value of fieldB on input', () => {
    const el3 = component.input3.nativeElement;

    el3.value = 'ngxTrimDirective   ';
    el3.dispatchEvent(new Event('input'));
    expect(el3.value).toBe('ngxTrimDirective   ');
    expect(component.fieldB.value).toBe('');

  });

  it('should trim the value of input3 on blur', () => {
    const el3 = component.input3.nativeElement;

    el3.value = 'ngxTrimDirective   ';
    el3.dispatchEvent(new Event('blur'));
    expect(el3.value).toBe('ngxTrimDirective');
    expect(component.fieldB.value).toBe('ngxTrimDirective');
  });

  it('should not update the value of fieldC on input', () => {
    const el4 = component.input4.nativeElement;

    el4.value = 'ngxTrimDirective   ';
    el4.dispatchEvent(new Event('input'));
    expect(el4.value).toBe('ngxTrimDirective');
    expect(component.fieldC.value).toBe('');

  });

  it('should trim the value of input4 on blur', () => {
    const el4 = component.input4.nativeElement;

    el4.value = 'ngxTrimDirective   ';
    el4.dispatchEvent(new Event('blur'));
    expect(el4.value).toBe('ngxTrimDirective');
    expect(component.fieldC.value).toBe('ngxTrimDirective');
  });

  it('should not update the value of fieldC on input if trimOption is false', () => {
    const el4 = component.input4.nativeElement;
    component.trimOption = false;
    fixture.detectChanges();

    el4.value = 'ngxTrimDirective   ';
    el4.dispatchEvent(new Event('input'));
    expect(el4.value).toBe('ngxTrimDirective   ');
    expect(component.fieldC.value).toBe('');

  });

  it('should not trim the value of input4 on blur if trimOption is false', () => {
    const el4 = component.input4.nativeElement;
    component.trimOption = false;
    fixture.detectChanges();

    el4.value = 'ngxTrimDirective   ';
    el4.dispatchEvent(new Event('input'));  // set _pendingChange
    el4.dispatchEvent(new Event('blur'));
    expect(el4.value).toBe('ngxTrimDirective   ');
    expect(component.fieldC.value).toBe('ngxTrimDirective   ');
  });

});
