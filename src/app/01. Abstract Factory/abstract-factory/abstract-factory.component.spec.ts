import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { AbstractFactoryComponent } from './abstract-factory.component';
import { AbstractTheme } from '../models/theme.model';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AbstractFactoryComponent', () => {
  let component: AbstractFactoryComponent;
  let fixture: ComponentFixture<AbstractFactoryComponent>;

  let lightTheme: AbstractTheme;
  let darkTheme: AbstractTheme;
  let personalTheme: AbstractTheme;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractFactoryComponent],
      imports: [BrowserAnimationsModule, FormsModule, AngularMaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const themes = component.themes;
    lightTheme = Object.assign(Object.create(themes[0]), themes[0]);
    darkTheme = Object.assign(Object.create(themes[1]), themes[1]);
    personalTheme = Object.assign(Object.create(themes[2]), themes[2]);
  });

  it('should have a light theme', () => {
    expect(lightTheme.name).toEqual('Light theme');
    expect(lightTheme.getStyleName()).toEqual('light');
    expect(lightTheme.getFontName()).toEqual('Comic Sans MS');
  });

  it('should have a dark theme', () => {
    expect(darkTheme.name).toEqual('Dark theme');
    expect(darkTheme.getStyleName()).toEqual('dark');
    expect(darkTheme.getFontName()).toEqual('Arial Black');
  });

  it('should have a personal theme', () => {
    expect(personalTheme.name).toEqual('Personal theme');
    expect(personalTheme.getStyleName()).toEqual('personal');
    expect(personalTheme.getFontName()).toEqual('Times New Roman');
  });
});
