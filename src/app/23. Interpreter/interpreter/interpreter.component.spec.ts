import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterComponent } from './interpreter.component';

describe('InterpreterComponent', () => {
  let component: InterpreterComponent;
  let fixture: ComponentFixture<InterpreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
