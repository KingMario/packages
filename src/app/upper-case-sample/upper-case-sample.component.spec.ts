import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { UpperCaseSampleComponent } from './upper-case-sample.component';

describe('UpperCaseSampleComponent', () => {
  let component: UpperCaseSampleComponent;
  let fixture: ComponentFixture<UpperCaseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpperCaseSampleComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperCaseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
