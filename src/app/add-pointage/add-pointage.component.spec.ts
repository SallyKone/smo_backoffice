import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointageComponent } from './add-pointage.component';

describe('AddPointageComponent', () => {
  let component: AddPointageComponent;
  let fixture: ComponentFixture<AddPointageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPointageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
