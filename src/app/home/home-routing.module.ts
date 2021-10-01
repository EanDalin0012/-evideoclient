import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VHomeComponent } from './v-home/v-home.component';
import { HomeComponent } from './home/home.component';
import { ViewHomeComponent } from './view-home/view-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: VHomeComponent,
    children: [
      {path: '', component: HomeComponent},
      { path: 'view', component: ViewHomeComponent},
    ]

  },
  // { path: 'view', component: ViewHomeComponent},
  // {
  //   path: '',
  //   component: VHomeComponent,
  //   children: [
  //     {path: '', component: HomeComponent},
  //     {path: 'view', component: ViewHomeComponent}

  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
