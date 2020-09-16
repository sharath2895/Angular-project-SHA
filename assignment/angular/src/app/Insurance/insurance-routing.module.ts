import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceComponent } from './insurance/insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';

export const routes: Routes =  [
    {
        path:'', component: InsuranceComponent
    },
  {
      path:'car-insurance', component: CarInsuranceComponent
  },
    {
      path:'bike-insurance', component: BikeInsuranceComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { 
  
}
