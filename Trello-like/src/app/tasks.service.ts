import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksUrl: string
  private userId: string
  public tasks: any[]

  constructor(private http: HttpClient, private router: Router) {
    this.tasksUrl = "http://localhost:8080/api/user"
    this.userId = ""
    this.tasks = []
  }

  getAllTasks(num: string) {

    return this.http.get<any>(this.tasksUrl + '/' + num).subscribe(data => {
      console.log(data)
      if (data.tasks !== undefined) {
        this.tasks = data.tasks
      }
    })
  }

  addTask(title: string, content: string) {
    return this.http.post<any>(this.tasksUrl + "/${userId}/task", {title: title, content: content})
  }
}
