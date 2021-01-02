import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { FactoryMethodComponent } from './factory-method.component';
import { FoodPlanningHistory } from '../models/food-planning-history.model';
import { Food, Pizza, Tacko, Wrap } from '../models/food.model';

describe('FactoryMethodComponent', () => {
  let component: FactoryMethodComponent;
  let fixture: ComponentFixture<FactoryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoryMethodComponent],
      imports: [AngularMaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an empty array', () => {
    expect(component.foodPlanning.length).toEqual(0);
  });

  it('should have a tracked function', () => {
    const history: FoodPlanningHistory = new FoodPlanningHistory(1, 'jump');
    expect(component.trackByFn(1, history)).toEqual(1);
  });

  it('should eat a pizza', () => {
    component.btnEatPizza();
    const lastItem: FoodPlanningHistory = component.foodPlanning[component.foodPlanning.length - 1];
    expect(lastItem.index).toEqual(component.foodPlanning.length - 1);
    expect(lastItem.activity).toEqual('Let`s make Pizza. and Let`s eat Pizza.');
  });

  it('should eat a wrap', () => {
    component.btnEatWrap();
    const lastItem: FoodPlanningHistory = component.foodPlanning[component.foodPlanning.length - 1];
    expect(lastItem.index).toEqual(component.foodPlanning.length - 1);
    expect(lastItem.activity).toEqual('Let`s make a Wrap. and Let`s eat a Wrap.');
  });

  it('should eat a tacko', () => {
    component.btnEatTacko();
    const lastItem: FoodPlanningHistory = component.foodPlanning[component.foodPlanning.length - 1];
    expect(lastItem.index).toEqual(component.foodPlanning.length - 1);
    expect(lastItem.activity).toEqual('Let`s make a Tacko. and Let`s eat a Tacko.');
  });

  it('should have an planning history constructor', () => {
    const history: FoodPlanningHistory = new FoodPlanningHistory(0, '1');
    expect(history.index).toEqual(0);
    expect(history.activity).toEqual('1');
  });

  it('should have a pizza constructor', () => {
    const pizza: Food = new Pizza();
    expect(pizza.produce()).toEqual('Let`s make Pizza.');
    expect(pizza.eat()).toEqual('Let`s eat Pizza.');
  });

  it('should have a wrap constructor', () => {
    const wrap: Food = new Wrap();
    expect(wrap.produce()).toEqual('Let`s make a Wrap.');
    expect(wrap.eat()).toEqual('Let`s eat a Wrap.');
  });

  it('should have a tacko constructor', () => {
    const tacko: Food = new Tacko();
    expect(tacko.produce()).toEqual('Let`s make a Tacko.');
    expect(tacko.eat()).toEqual('Let`s eat a Tacko.');
  });


});
