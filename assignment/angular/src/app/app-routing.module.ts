import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveformsBuilderComponent } from './reactiveforms-builder/reactiveforms-builder.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { LeftnavigationComponent } from './leftnavigation/leftnavigation.component';

const routes: Routes =  [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'autocomplete', component:AutocompleteComponent
  },
  {
    path:'reactive-forms', component:ReactiveFormsComponent
  },
  {
    path:'reactiveforms-builder', component:ReactiveformsBuilderComponent
  },
  {
    path:'leftnavigation', component:LeftnavigationComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
