import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
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
  { path: 'about/:id', component: AboutComponent,
  },
  { path: 'example/:id/:e_id', component: ExampleComponent,
  },
];
// const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
