import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav
      class="border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4"
      [ngClass]="[rounded ? 'rounded' : '', border ? 'border' : '', extraClass]"
    >
      <div
        class="mx-auto flex flex-wrap items-center justify-between"
        [ngClass]="{ container: !fluid }"
      >
        <ng-content></ng-content>
      </div>
    </nav>
  `,
  // styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() border = false;
  @Input() fluid = false;
}
