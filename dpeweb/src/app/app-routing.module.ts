import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component: PagesComponent,
    children:[
      { path: '', component: HomeComponent, pathMatch:'full'},
      
    ] 
  },
];
// const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
