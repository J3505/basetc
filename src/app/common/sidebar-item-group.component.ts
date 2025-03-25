import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-item-group',
  imports: [],
  template: `
    <div class="flex flex-col space-y-2">
      <ng-content></ng-content>
    </div>
  `,
})
//   styleUrl: './sidebar-item-group.component.css'
// })
export class SidebarItemGroupComponent {}
