import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../modules/angular-material.module';
import { SingletonComponent } from './singleton.component';
import { BlackTea, FruitTea } from '../models/tea.model';

describe('SingletonComponent', () => {
  let component: SingletonComponent;
  let fixture: ComponentFixture<SingletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingletonComponent],
      imports: [AngularMaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an unique instance of black tea', () => {
    component.btnGetNewBlackTeaInstance();
    const blackTeaOfComponent = component.blackTea;
    const blackTeaOfTest = BlackTea.getInstance();
    expect(blackTeaOfComponent).toEqual(blackTeaOfTest);
  });

  it('should have an unique instance of fruit tea', () => {
    component.btnGetNewFruitTeaInstance();
    const fruitTeaOfComponent = component.fruitTea;
    const fruitTeaOfTest = FruitTea.getInstance();
    expect(fruitTeaOfComponent).toEqual(fruitTeaOfTest);
  });
});
