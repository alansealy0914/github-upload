import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilsTableComponent } from './sils-table.component';

describe('SilsTableComponent', () => {
  let component: SilsTableComponent;
  let fixture: ComponentFixture<SilsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
