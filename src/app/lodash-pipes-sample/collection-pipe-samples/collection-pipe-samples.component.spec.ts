import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { CollectionPipeSamplesComponent } from './collection-pipe-samples.component';

describe('CollectionPipeSamplesComponent', () => {
  let component: CollectionPipeSamplesComponent;
  let fixture: ComponentFixture<CollectionPipeSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionPipeSamplesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPipeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
