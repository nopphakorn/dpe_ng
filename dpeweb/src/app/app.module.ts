import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { PagesComponent } from './pages/pages.component';
import { FormsModule } from '@angular/forms';
import { ContentOneComponent } from './home/content-one/content-one.component';
import { ContentTwoComponent } from './home/content-two/content-two.component';
import { ContentThreeComponent } from './home/content-three/content-three.component';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    AppfooterComponent,
    AppheaderComponent,
    PagesComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
