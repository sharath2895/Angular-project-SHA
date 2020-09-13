import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsBuilderComponent } from './reactiveforms-builder/reactiveforms-builder.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatInputModule } from '@angular/material/input';
import { LeftnavigationComponent } from './leftnavigation/leftnavigation.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveFormsComponent,
    ReactiveformsBuilderComponent,
    AutocompleteComponent,
    LeftnavigationComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
