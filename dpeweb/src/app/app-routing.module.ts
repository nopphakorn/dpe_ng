import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'home', component: PagesComponent,
  //   children:[
  //     { path: '', component: HomeComponent, pathMatch:'full'},
      
  //   ] 
  // },
  { path: 'home', component: HomeComponent,
  },
  
];
// const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
