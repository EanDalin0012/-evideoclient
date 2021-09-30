import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VLayoutComponent } from './layout/v-layout/v-layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  // {
  //   path: 'login', component: LayoutBlankComponent, loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  // },
  {
    path: 'acc', component: VLayoutComponent,
    // loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: '', component: VLayoutComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
