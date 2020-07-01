import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { ContentOneComponent } from './home/content-one/content-one.component';
import { ContentTwoComponent } from './home/content-two/content-two.component';
import { ContentThreeComponent } from './home/content-three/content-three.component';

//เรียกใช้งาน router
import { RouterModule } from '@angular/router'
//เรียกใช้งาน [(ngModel)] ,FormModules
import { FormsModule } from '@angular/forms';
// HTTP Module
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { ExampleComponent } from './example/example.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppfooterComponent,
    AppheaderComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent,
    ExampleComponent,
    AboutComponent
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
