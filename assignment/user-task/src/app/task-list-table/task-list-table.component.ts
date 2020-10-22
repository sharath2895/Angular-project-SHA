import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserTaskService } from '../shared/user-task.service';
import { task, taskResult } from '../shared/task.model';
import { Sort } from '@angular/material/sort';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.css']
})
export class TaskListTableComponent implements OnInit {
  taskboard: task[];
  columns = ['id', 'due_date', 'message', 'priority', 'assigned_name', 'created_on', 'edit', 'remove'];
  dataSource: MatTableDataSource<task>;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  updatableTask;
  message;
  assigned_to;
  priority;
  taskTitle: string = "Task-Management"
  isEdit: boolean=false;
  data:any;

  constructor(private usertaskserivce: UserTaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.usertaskserivce.taskListInfo$()
      .pipe(
        first(),
        map((result: taskResult) => result.tasks),
        tap((value) => this.taskboard = value),
        tap(() => {
          this.dataSource = new MatTableDataSource(this.taskboard.slice());
          this.dataSource.paginator = this.paginator;
        })
      )
      .subscribe();
  }
  removeAll() {
    this.dataSource.data = [];
  }
  removeAt(index: number, $event, task) {
    const data = this.dataSource.data;
    this.usertaskserivce.deleteTask$(task.id)
      .pipe(first())
      .subscribe();
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }
  reset() {
    this.dataSource.data = this.taskboard.slice();
    this.table.renderRows();
  }
  editAt(index: number, task) {
    this.updatableTask = task;
    this.message = task.message;
    this.priority = task.priority;
    this.assigned_to = task.assigned_to;
    //this.isEdit = true;
  }
  openDialog() {
    this.dialog.open(DialogBoxComponent);
  }

  sortData(sort: Sort) {
    // if (sort.active && sort.direction !== '') {
    //   this.dataSource.data = this.dataSource.data.sort((a, b) => {
    //     const isAsc = sort.direction === 'asc';
    //     switch (sort.active) {
    //       case 'player': return this.compare(a.player, b.player, isAsc);
    //       case 'game': return this.compare(a.game, b.game, isAsc);
    //       case 'task': return this.compare(a.task, b.task, isAsc);
    //       default: return 0;
    //     }
    //   });
    // }
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  updateRecord() {
    this.updatableTask.message = this.message;
    this.updatableTask.priority = this.priority;
    this.updatableTask.assigned_to = this.assigned_to;

    this.usertaskserivce.updateTask$(this.updatableTask)
    .pipe(first())
    .subscribe();
    this.isEdit = false;
  }
}
