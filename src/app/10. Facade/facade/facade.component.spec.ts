import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadeComponent } from './facade.component';

describe('FacadeComponent', () => {
  let component: FacadeComponent;
  let fixture: ComponentFixture<FacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
