import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { LoanProcessComponent } from './loan-process/loan-process.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';


export const routes: Routes =  [
    {
        path:'', component:ApplyLoanComponent
    },
    {
        path:'loan-process', component: LoanProcessComponent
    },
    {
        path:'loan-repayment', component: LoanRepaymentComponent
    }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanFileRoutingModule { 
  
}
