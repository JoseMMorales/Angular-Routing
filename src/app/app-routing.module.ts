import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';

const ROUTES: any[] = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./home/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'products',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./products/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'message',
    outlet: 'popup',
    loadChildren: () =>
      import('./messages/message.module').then((m) => m.MessageModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES //,{ enableTracing: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
