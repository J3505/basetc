import { Component, Input } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SanitizeHtmlPipe } from './pipes';
import { BadgeComponent } from "./badge.component";

@Component({
  selector: 'app-sidebar-item',
  imports: [CommonModule, RouterModule, SanitizeHtmlPipe, BadgeComponent],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {

  @Input() icon?: string;
  @Input() link?: string;
  @Input() label?: string;
  constructor(readonly ThemeService: ThemeService) {}
}
