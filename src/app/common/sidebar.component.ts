import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  template: `
    <aside
      class="h-full"
      [class.w-16]="ThemeService.$collapsed | async"
      [class.w-64]="(ThemeService.$collapsed | async) === false"
    >
      <div
        class="flex h-full flex-col  space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800"
        [class.rounded]="rounded"
        [ngClass]="extraClass"
      >
        <ng-content></ng-content>
      </div>
    </aside>
  `,
  // styleUrl: ''
})
export class SidebarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;

  constructor(readonly ThemeService: ThemeService) {}
}
