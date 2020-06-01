/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DatePipeSamplesComponent } from './date-pipe-samples.component';

describe('CollectionPipeSamplesComponent', () => {
  let component: DatePipeSamplesComponent;
  let fixture: ComponentFixture<DatePipeSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePipeSamplesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePipeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
