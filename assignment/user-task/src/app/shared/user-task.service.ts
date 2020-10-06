import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { task, taskResult } from './task.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  private readonly userListApi: string = 'https://devza.com/tests/tasks/listusers';
  private readonly createTaskApi: string = 'http://devza.com/tests/tasks/create';
  private readonly taskListApi: string = 'http://devza.com/tests/tasks/list';
  private readonly deleteTaskApi: string = 'http://devza.com/tests/tasks/delete';
  private readonly updateTaskApi: string = 'http://devza.com/tests/tasks/update';


  constructor(private httpclient: HttpClient) {

  }

  //get method
  getUserInfo$() {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('AuthToken', 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88');
    return this.httpclient.get<any>(`${this.userListApi}`,{ headers: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' } });
  }

  //get method
  taskListInfo$():Observable<taskResult> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('AuthToken', 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88');

    return this.httpclient.get<any>(`${this.taskListApi}`, { headers: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' } });
  }


  //post method
  createUserTask$() {

    let body = new FormData();
    body.append('due_date', '2020-09-18');
    body.append('message', 'you have been assigned task Mr.sharath');
    body.append('priority', '2');
    body.append('assigned_to', '1');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('AuthToken', 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88');

    return this.httpclient.post<any>(`${this.createTaskApi}`, body, { headers: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' } });
    // const params = new HttpParams()
    //                 .set('param1', param1Value)
    //                 .set('param2', param2Value);
  }

  //post method
  deleteTask$(taskId) {
    let body = new FormData();
    body.append('taskid',taskId );
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('AuthToken', 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88');
    return this.httpclient.post<any>(`${this.deleteTaskApi}`,body,{ headers: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' } } );
  }

  updateTask$(task: task) {
    let body = new FormData();
    body.append('message', 'Sharath Please Make it fast.. !');
    body.append('due_date', '2020-09-19 12:12:12');
    body.append('priority', '2');
    body.append('assigned_to', '1');
    body.append('taskid', '63');

    return this.httpclient.post<any>(`${this.updateTaskApi}`,body,{ headers: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' } });
  }
}
