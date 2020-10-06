import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { UserTaskService } from './shared/user-task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { task, taskResult } from './shared/task.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Task Management';
  rowSelection;
  pagination;
  rowData: [];
  defaultColDef;
  params: any;
  deleteclick: string = " ";
  value: string = "edit";
  openTable: boolean = false;
  
  // rowData1: [];
  // gridApi;
  //gridColumnApi;
  // getUserInfo$: Observable<any>;

  constructor(private usertaskserivce: UserTaskService, private dialog: MatDialog) {
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
    };
    this.rowSelection = 'multiple';
  }

  columnDefs = [
    {
      field: 'id', headerName: 'ID', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
    },
    { field: 'picture', headerName: 'Picture', cellRenderer: this.imageRender
  },
        { field: 'name', headerName: 'Name' },

  ]

imageRender(params) {  
 return `<span><img border="0" width = "25px" height="50px" src=${params.value} ></span>`;
}

  // openDialog() {
  //   this.dialog.open(DialogBoxComponent);
  // }

  onGridReady(event) {
    this.usertaskserivce.getUserInfo$()
      .pipe(
        map((result: any) => result.users),
        tap((data: any) => this.rowData = data)
      )
      .subscribe();
  }

  gridReadyTask(event) {
    this.openTable = true;

  }

  deleteTask(taskId) {
    this.usertaskserivce.deleteTask$(taskId)
      .pipe(
        map((value: any) => value.tasks),
        tap((data: any) => this.rowData = data)
      )
      .subscribe();
  }
}
// columnDefs1 = [
  //   { field: 'id', headerName: 'Task ID', editable: true },
  //   { field: 'message', headerName: 'Message', editable: true },
  //   { field: 'assigned_to', headerName: 'Assign To', editable: true },
  //   { field: 'assigned_name', headerName: 'Assigned Name', editable: true },
  //   { field: 'created_on', headerName: 'Date of Creation', editable: true },
  //   { field: 'due_date', headerName: 'Due Date', editable: true },
  //   { field: 'priority', headerName: 'Priority', editable: true },
  //   {
  //     field: 'edit', headerName: 'EDIT', cellRenderer: function button() {
  //       return '<span><i class="material-icons" id="edit" (click)="onClick()">edit</i></span>'
  //     },

  //   },
  //   {
  //     field: ' delete', headerName: 'Delete', 


  //   }

  // ];
