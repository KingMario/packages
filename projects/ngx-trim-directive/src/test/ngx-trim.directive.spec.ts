import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NgxTrimDirective } from '../lib/ngx-trim.directive';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  template: `
    <input type="text" #input1 [(ngModel)]="value" trim>
    <div [formGroup]="formA">
      <input type="text" #input2 formControlName="fieldA" trim="blur">
    </div>
  `,
})
class TestComponent {
  @ViewChild('input1') input1: ElementRef;
  @ViewChild('input2') input2: ElementRef;

  readonly fieldA = new FormControl('');
  readonly formA = new FormGroup({
    fieldA: this.fieldA,
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

});
