import { NgModule } from '@angular/core';
import { InsuranceComponent } from './insurance/insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import{InsuranceRoutingModule} from './insurance-routing.module';



@NgModule({
  declarations: [
    CarInsuranceComponent,
    BikeInsuranceComponent,
    InsuranceComponent,

   
    
    
  ],
  imports: [
    InsuranceRoutingModule
  ],
  providers: [],
 
})
export class InsuranceModule { }
