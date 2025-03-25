import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-theme-toggle',
  imports: [CommonModule],
  templateUrl: './dark-theme-toggle.component.html',
  // styleUrl: './dark-theme-toggle.component.css',
})
export class DarkThemeToggleComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription | undefined = undefined;
  constructor(readonly ThemeService: ThemeService) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      // localStorage.getItem('color-theme') === 'dark' ||
      // (!('color-theme' in localStorage) &&
      //   'matchMedia' in window &&
      //   window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.ThemeService.setTheme('dark');
      document.documentElement.classList.add('dark');
      
    } else {
      this.ThemeService.setTheme('light');
      document.documentElement.classList.remove('dark');

    }
    this.themeSubscription = this.ThemeService.$theme
      .asObservable()
      .subscribe((theme) => {
        localStorage.setItem('color-theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });

  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }
}
