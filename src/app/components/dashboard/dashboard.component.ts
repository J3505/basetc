import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from '../../common/componentes';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  template: `<div class="mx-auto max-w-screen-xl p-4 lg:p-12 lg:text-center">
    <h2
      class="mb-4 text-2xl font-bold text-gray-900 dark:text-white lg:text-center lg:text-4xl lg:font-extrabold lg:leading-snug 2xl:px-48"
    >
      Tailwind CSS Components
    </h2>
    <p
      class="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:mb-16 lg:text-center lg:text-xl xl:px-64"
    >
      Explore the whole collection of open-source web components and interactive
      elements built with the utility classes from Tailwind CSS
    </p>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        *ngFor="let component of components"
        class="h-64 cursor-pointer rounded-xl border border-gray-100 bg-white shadow transition hover:border-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:shadow-gray-800 dark:hover:border-gray-600"
        [routerLink]="'/' + component.href"
      >
        <div
          class="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-50 py-2.5 px-5 dark:border-gray-700 dark:bg-gray-700"
        >
          <span class="text-lg font-medium text-gray-500 dark:text-gray-400">{{
            component.title
          }}</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-5 w-5 text-gray-900 dark:text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </div>
        <div class="flex h-52 items-center justify-center">
          <img
            class="dark:hidden"
            [ngClass]="component.card!.className"
            [src]="'./assets/images/' + component.card!.images.light"
            [alt]="component.title"
          />
          <img
            class="hidden dark:block"
            [ngClass]="component.card!.className"
            [src]="'./assets/images/' + component.card!.images.dark"
            [alt]="component.title"
          />
        </div>
      </a>
    </div>
  </div>`,
  // styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  components = components.filter((component) => !!component.card);

  constructor() {
    console.log(components);
  }
}
