import { Injectable } from '@angular/core';

const themeA = require('../../shared/styles/themes/theme-a.scss');
const themeB = require('../../shared/styles/themes/theme-b.scss');
const themeC = require('../../shared/styles/themes/theme-c.scss');
const themeD = require('../../shared/styles/themes/theme-d.scss');
const themeE = require('../../shared/styles/themes/theme-e.scss');
const themeF = require('../../shared/styles/themes/theme-f.scss');
const themeG = require('../../shared/styles/themes/theme-g.scss');
const themeH = require('../../shared/styles/themes/theme-h.scss');

@Injectable()
export class ThemesService {
  styleTag: any;
  defaultTheme: string = 'D';

  constructor() {
    this.createStyle();
    this.setTheme(this.defaultTheme);
  }

  private createStyle() {
    const head = document.head || document.getElementsByTagName('head')[0];
    this.styleTag = document.createElement('style');
    this.styleTag.type = 'text/css';
    this.styleTag.id = 'appthemes';
    head.appendChild(this.styleTag);
  }

  setTheme(name) {
    switch (name) {
      case 'A':
        return this.injectStylesheet(themeA);
      case 'B':
        return this.injectStylesheet(themeB);
      case 'C':
        return this.injectStylesheet(themeC);
      case 'D':
        return this.injectStylesheet(themeD);
      case 'E':
        return this.injectStylesheet(themeE);
      case 'F':
        return this.injectStylesheet(themeF);
      case 'G':
        return this.injectStylesheet(themeG);
      case 'H':
        return this.injectStylesheet(themeH);
    }
  }

  injectStylesheet(css) {
    return (this.styleTag.innerHTML = css.default);
  }

  getDefaultTheme() {
    return this.defaultTheme;
  }
}
