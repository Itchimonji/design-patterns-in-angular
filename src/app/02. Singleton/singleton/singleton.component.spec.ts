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

  it('should have an unique instance of Black Tea', () => {
    component.btnGetNewBlackTeaInstance();
    const blackTeaOfComponent = component.blackTea;
    const blackTeaOfTest = BlackTea.getInstance();
    expect(blackTeaOfComponent).toEqual(blackTeaOfTest);
    expect(blackTeaOfComponent.getType()).toEqual('Black Tea');
    expect(blackTeaOfComponent.getId()).toBeLessThan(100);
  });

  it('should have an unique instance of Fruit Tea', () => {
    component.btnGetNewFruitTeaInstance();
    const fruitTeaOfComponent = component.fruitTea;
    const fruitTeaOfTest = FruitTea.getInstance();
    expect(fruitTeaOfComponent).toEqual(fruitTeaOfTest);
    expect(fruitTeaOfComponent.getType()).toEqual('Fruit Tea');
    expect(fruitTeaOfComponent.getId()).toBeLessThan(100);
  });

  it('should reset Black Tea instance', () => {
    window.alert = jest.fn();
    const oldId: number = component.blackTea.getId();
    BlackTea.resetForTesting();
    expect(BlackTea.getInstance().getId()).not.toBe(oldId);
  });

  it('should have a Fruit Tea instance', () => {
    window.alert = jest.fn();
    const oldId: number = component.blackTea.getId();
    BlackTea.setTestingInstance(FruitTea.getInstance());
    expect(BlackTea.getInstance().getType()).toEqual('Fruit Tea');
  });

});
