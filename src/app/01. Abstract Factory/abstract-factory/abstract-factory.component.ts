import { Component, OnInit } from '@angular/core';
import {Theme} from '../models/theme.model';
import {DarkThemeFactory, LightThemeFactory, PersonalThemeFactory} from '../models/factory.model';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.scss']
})
export class AbstractFactoryComponent implements OnInit {

  public themes: Theme[];
  public selectedTheme: Theme;

  constructor() {
    this.themes = new Array<Theme>();
  }

  ngOnInit(): void {
    this.themes.push(new Theme(new LightThemeFactory, 'Light theme'));
    this.themes.push(new Theme(new DarkThemeFactory, 'Dark theme'));
    this.themes.push(new Theme(new PersonalThemeFactory, 'Personal theme'));
    this.selectedTheme = this.themes[0];
  }

}
