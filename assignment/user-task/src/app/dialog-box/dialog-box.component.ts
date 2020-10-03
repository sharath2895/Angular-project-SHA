import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserTaskService } from '../shared/user-task.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  isEdit: boolean = false;
  updatableTask;
  message;
  priority;
  assigned_to;
  dataSource: any;
  taskboard: [];
  table: any;
  constructor(private usertaskserivce: UserTaskService ) { }

  ngOnInit(): void {
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
