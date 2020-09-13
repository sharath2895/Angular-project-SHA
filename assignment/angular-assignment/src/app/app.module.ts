import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharathAssignmentComponent } from './sharath-assignment/sharath-assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    SharathAssignmentComponent,
    LeftNavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
