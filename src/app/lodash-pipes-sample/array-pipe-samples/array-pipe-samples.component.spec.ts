import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ArrayPipeSamplesComponent } from './array-pipe-samples.component';

describe('ArrayPipeSamplesComponent', () => {
  let component: ArrayPipeSamplesComponent;
  let fixture: ComponentFixture<ArrayPipeSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayPipeSamplesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPipeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
