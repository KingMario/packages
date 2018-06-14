import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { CleaveSampleComponent } from './cleave-sample.component';

describe('CleaveSampleComponent', () => {
  let component: CleaveSampleComponent;
  let fixture: ComponentFixture<CleaveSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CleaveSampleComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaveSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
