import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMethodComponent } from './template-method.component';

describe('TemplateMethodComponent', () => {
  let component: TemplateMethodComponent;
  let fixture: ComponentFixture<TemplateMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
