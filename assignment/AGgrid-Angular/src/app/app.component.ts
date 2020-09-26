import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component } from '@angular/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Grid";
  header: string = "Angular-Grid";
  private paginationPageSize;
  public value = ' ';
  searchInput =  '';




  constructor() {
    this.paginationPageSize = 10;
    // this.paginationNumberFormatter = function (params) {
    //   return '[' + params.value.toLocaleString() + ']';
    // };

  }

  columnDefs = [
    { field: 'Name', sortable: true, filter: true, resizable: true, flex: 1, minWidth: 100, },
    { field: 'Age', sortable: true, filter: true, resizable: true, flex: 1, minWidth: 100, },
    { field: 'Gender', sortable: true, filter: true, resizable: true, flex: 1, minWidth: 100, },
    { field: 'Hobbby', sortable: true, filter: true, resizable: true, flex: 1, minWidth: 100, },
    { field: 'Place', sortable: true, filter: true, resizable: true, flex: 1, minWidth: 100, }
  ];

  rowData = [
    { Name: 'Ashok', Age: '18', Gender: 'Male', Hobbby: 'games', Place: 'chennai' },
    { Name: 'Bala', Age: '20', Gender: 'Male', Hobbby: 'cricket', Place: 'madurai' },
    { Name: 'dinesh', Age: '21', Gender: 'Male', Hobbby: 'games', Place: 'trichy' },
    { Name: 'susheela', Age: '18', Gender: 'Female', Hobbby: 'singing', Place: 'chennai' },
    { Name: 'kavitha', Age: '20', Gender: 'Female', Hobbby: 'Dance', Place: 'salem' },
    { Name: 'anu', Age: '18', Gender: 'Female', Hobbby: 'cooking', Place: 'vellore' },
    { Name: 'Suresh', Age: '24', Gender: 'Male', Hobbby: 'cricket', Place: 'chennai' },
    { Name: 'Raja', Age: '18', Gender: 'Male', Hobbby: 'games', Place: 'chennai' },
    { Name: 'Ravi', Age: '20', Gender: 'Male', Hobbby: 'cricket', Place: 'madurai' },
    { Name: 'Eshwar', Age: '21', Gender: 'Male', Hobbby: 'games', Place: 'trichy' },
    { Name: 'preethi', Age: '18', Gender: 'Female', Hobbby: 'singing', Place: 'chennai' },
    { Name: 'gayathri', Age: '20', Gender: 'Female', Hobbby: 'Dance', Place: 'salem' },
    { Name: 'padma', Age: '18', Gender: 'Female', Hobbby: 'cooking', Place: 'vellore' },
    { Name: 'Saravanan', Age: '24', Gender: 'Male', Hobbby: 'cricket', Place: 'chennai' },
    { Name: 'srini', Age: '18', Gender: 'Male', Hobbby: 'games', Place: 'chennai' },
    { Name: 'sarathy', Age: '20', Gender: 'Male', Hobbby: 'cricket', Place: 'madurai' },
    { Name: 'naveen', Age: '21', Gender: 'Male', Hobbby: 'games', Place: 'trichy' },
    { Name: 'sowmiya', Age: '18', Gender: 'Female', Hobbby: 'singing', Place: 'chennai' },
    { Name: 'aparna', Age: '20', Gender: 'Female', Hobbby: 'Dance', Place: 'salem' },
    { Name: 'keerthi', Age: '18', Gender: 'Female', Hobbby: 'cooking', Place: 'vellore' },


  ];


myInput(term){
this.rowData

}


  filter(event: any)
   filter (value: string) {this.value = value;}

  // onSearch(e) {
  //   if (this.rowData !== e ) {
  //     console.log("data not found")
  //   }}







  //  public filter(){
  //     this.rowData.filter()
  //   }
  // }
}
