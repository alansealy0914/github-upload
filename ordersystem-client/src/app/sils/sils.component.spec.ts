import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilsComponent } from './sils.component';

describe('SilsComponent', () => {
  let component: SilsComponent;
  let fixture: ComponentFixture<SilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
