import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { BuilderComponent } from './builder.component';
import { House, HouseImpl } from '../models/house.model';

describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuilderComponent],
      imports: [AngularMaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have house 1', () => {
    const house1: House = component.houses[0];
    expect(house1.basement).toEqual(true);
    expect(house1.floors).toEqual(2);
    expect(house1.pool).toEqual(false);
    expect(house1.garden).toEqual(true);
    expect(house1.walls).toEqual(17);
    expect(house1.windows).toEqual(32);
    expect(house1.doors).toEqual(7);
  });

  it('should have house 2', () => {
    const house2: House = component.houses[1];
    expect(house2.basement).toEqual(true);
    expect(house2.floors).toEqual(7);
    expect(house2.pool).toEqual(true);
    expect(house2.garden).toEqual(true);
    expect(house2.walls).toEqual(42);
    expect(house2.windows).toEqual(75);
    expect(house2.doors).toEqual(15);
  });

  it('should have a default house', () => {
    const house2: House = new HouseImpl();
    expect(house2.basement).toEqual(false);
    expect(house2.floors).toEqual(0);
    expect(house2.pool).toEqual(false);
    expect(house2.garden).toEqual(false);
    expect(house2.walls).toEqual(0);
    expect(house2.windows).toEqual(0);
    expect(house2.doors).toEqual(0);
  });
});
