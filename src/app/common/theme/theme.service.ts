import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // Cambia de estdo el tema
  $theme = new BehaviorSubject<Theme>('light');

  // sidebar
  $collapsed = new BehaviorSubject<boolean>(false);

  constructor() { }

  setTheme(theme: Theme) {
    this.$theme.next(theme);
  }

  toggleTheme() {
    const theme = this.$theme.getValue();
    this.setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  // para sidebar
  setCollapsed(collapsed: boolean) {
    this.$collapsed.next(collapsed);
  }

  toggleCollapsed() {
    const collapsed = this.$collapsed.getValue();
    this.setCollapsed(!collapsed);
  }
}
