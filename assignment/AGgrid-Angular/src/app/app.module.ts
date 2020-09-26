import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from "ag-grid-angular";
import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatInputModule,
    MatIconModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
