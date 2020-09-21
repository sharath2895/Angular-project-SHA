import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class PunkService {

private readonly apiURL: string = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';
 

  constructor( private httpClient: HttpClient) { }
  public getbeerInfo$(){
    return this.httpClient.get<any>(`${this.apiURL}`)
  }
}
