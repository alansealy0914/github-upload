import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwdComponent } from './owd.component';

describe('OwdComponent', () => {
  let component: OwdComponent;
  let fixture: ComponentFixture<OwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
