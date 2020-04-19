import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilsDetailComponent } from './sils-detail.component';

describe('SilsDetailComponent', () => {
  let component: SilsDetailComponent;
  let fixture: ComponentFixture<SilsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
