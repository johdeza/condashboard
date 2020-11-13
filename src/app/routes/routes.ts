import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        ]
    },

    // Not found
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'nuevo-nutriologo', loadChildren: () => import('./pages/newnutriologist/newnutriologist.module').then(m => m.NewnutriologistModule) },
    { path: '**', redirectTo: 'home' }


];
