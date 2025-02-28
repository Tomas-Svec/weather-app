import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../page/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'tab2',
        loadComponent: () => import('../page/lista-de-lugares/lista-de-lugares.page').then((m) => m.ListaDeLugaresPage),
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];