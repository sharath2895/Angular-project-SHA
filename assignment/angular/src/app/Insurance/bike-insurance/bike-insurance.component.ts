import { Component, OnInit } from '@angular/core';
import{ HttpService} from 'src/shared/services/http.service';
@Component({
  selector: 'app-bike-insurance',
  templateUrl: './bike-insurance.component.html',
  styleUrls: ['./bike-insurance.component.css']
})
export class BikeInsuranceComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.httpService.getKingInfo().subscribe();
  }

}
