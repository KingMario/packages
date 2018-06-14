import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { LowerCaseSampleComponent } from './lower-case-sample.component';

describe('UpperCaseSampleComponent', () => {
  let component: LowerCaseSampleComponent;
  let fixture: ComponentFixture<LowerCaseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LowerCaseSampleComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerCaseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
