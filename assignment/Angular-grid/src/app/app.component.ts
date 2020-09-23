import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-grid';
 

constructor(private http: HttpClient){
}


  columnDefs = [
    { field: 'make' , sortable : true, filter: true},
    { field: 'model', sortable: true, filter: true},
    {field: 'price', sortable: true, filter: true}
  ];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

ngOnInit(){
  
}


}
