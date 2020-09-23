import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 

  constructor( private httpClient : HttpClient) { }
  getCarInfo(){
  return this.httpClient.get(`https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json`);
  
  }
}
