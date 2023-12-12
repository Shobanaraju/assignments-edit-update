import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRedColorComponent } from './child-red-color.component';

describe('ChildRedColorComponent', () => {
  let component: ChildRedColorComponent;
  let fixture: ComponentFixture<ChildRedColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildRedColorComponent]
    });
    fixture = TestBed.createComponent(ChildRedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
