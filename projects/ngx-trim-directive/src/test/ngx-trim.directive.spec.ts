import { Component } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxTrimDirective } from '../lib/ngx-trim.directive';

@Component({
  template: `
    <input type="text" [value]="value" trim>
  `,
})
class TestComponent {
  value = '';
}

describe('NgxTrimDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it('should trim the input value', () => {
    const nativeEl = fixture.debugElement.query(By.directive(NgxTrimDirective)).nativeElement;

    nativeEl.value = 'ngxTrimDirective   ';
    nativeEl.dispatchEvent(new Event('input'));
    expect(nativeEl.value).toBe('ngxTrimDirective');

    nativeEl.value = '   ngxTrimDirective';
    nativeEl.dispatchEvent(new Event('input'));
    expect(nativeEl.value).toBe('ngxTrimDirective');

    nativeEl.value = '   ngxTrimDirective   ';
    nativeEl.dispatchEvent(new Event('blur'));
    expect(nativeEl.value).toBe('ngxTrimDirective');
  });

});
