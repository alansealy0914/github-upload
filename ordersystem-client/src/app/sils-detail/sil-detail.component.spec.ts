import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilDetailComponent } from './sil-detail.component';

describe('SilsDetailComponent', () => {
  let component: SilDetailComponent;
  let fixture: ComponentFixture<SilDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
