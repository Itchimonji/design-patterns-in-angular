import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainOfResponsibilityComponent } from './chain-of-responsibility.component';

describe('ChainOfResponsibilityComponent', () => {
  let component: ChainOfResponsibilityComponent;
  let fixture: ComponentFixture<ChainOfResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainOfResponsibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainOfResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
