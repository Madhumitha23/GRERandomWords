import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {WordServiceComponent} from './Words/wordService.component';
import {HttpClientModule} from '@angular/common/http';
import { WordsComponent } from './Words/words.component';
 import {LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    WordsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WordServiceComponent,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
