import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { APP_ROUTING, APP_ROUTING_PROVIDERS } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    APP_ROUTING
  ],
  providers: [
    ...APP_ROUTING_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
