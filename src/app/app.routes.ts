import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const appRoutes: Routes = [
    {
      path: '',
      loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
    },
  ];

