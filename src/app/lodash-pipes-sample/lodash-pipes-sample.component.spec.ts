import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashPipesSampleComponent } from './lodash-pipes-sample.component';

describe('LodashPipesSampleComponent', () => {
  let component: LodashPipesSampleComponent;
  let fixture: ComponentFixture<LodashPipesSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodashPipesSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashPipesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
