import { LayoutComponent } from '../layout/layout.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      { path: 'pacientes', loadChildren: () => import('./Inicio/list/list.module').then((m) => m.ListModule) },
      { path: 'pacientes/:id', loadChildren: () => import('./Inicio/form/form.module').then((m) => m.FormModule) },
    ],
  },

  // Not found
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule) },
  {
    path: 'nuevo-nutriologo',
    loadChildren: () => import('./pages/newnutriologist/newnutriologist.module').then((m) => m.NewnutriologistModule),
  },
  {
    path: 'user/account/restorePassword/:id/:token',
    loadChildren: () => import('./pages/newnutriologist/newnutriologist.module').then((m) => m.NewnutriologistModule),
  },
  { path: '**', redirectTo: '/login' },
];
