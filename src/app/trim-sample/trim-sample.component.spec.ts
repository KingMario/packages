import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimSampleComponent } from './trim-sample.component';

describe('TrimSampleComponent', () => {
  let component: TrimSampleComponent;
  let fixture: ComponentFixture<TrimSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
