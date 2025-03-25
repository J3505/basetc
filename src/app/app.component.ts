import { components } from './common/componentes';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { DarkThemeToggleComponent } from './common/dark-theme-toggle.component';
import { NavbarComponent } from './common/navbar.component';
import { SidebarComponent } from './common/sidebar.component';
import { SidebarItemComponent } from './common/sidebar-item.component';
import { SidebarItemGroupComponent } from './common/sidebar-item-group.component';
import { ThemeService } from './common/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    
    RouterOutlet,
    RouterModule,
    DarkThemeToggleComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'basetc';

  components = components;
  constructor(readonly ThemeService: ThemeService) {}

  ngOnInit(): void {
    initFlowbite();
  }
}
