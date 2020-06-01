/*
 * Copyright (c) 2020. Mario Studio. All right reserved.
 */

import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FunctionPipeSamplesComponent } from './function-pipe-samples.component';

describe('CollectionPipeSamplesComponent', () => {
  let component: FunctionPipeSamplesComponent;
  let fixture: ComponentFixture<FunctionPipeSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionPipeSamplesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionPipeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
