import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  tasks: any[] = [
    {title: "Titre 0", content: "Contenu 0", state: 0, edit: true},
    {title: "Titre 2", content: "Contenu 1", state: 0, edit: false},
    {title: "Titre 3", content: "Contenu 2", state: 2, edit: true}
  ]

  constructor(public tasksService: TasksService, private userService: UserService) { 

   }

  ngOnInit(): void {
    this.tasksService.getAllTasks(this.userService.getId())
  }

  validEdit(num: number) :void {
    if (this.tasksService.tasks[num].edit == true) {
      this.tasksService.tasks[num].edit = false;
    }
    else {
      this.tasksService.tasks[num].edit = true
    }
  }

  changeStateRight(num: number) :void {
    console.log(this.tasksService.tasks[num].state)
    this.tasksService.tasks[num].state = this.tasksService.tasks[num].state + 1
  }

  changeStateLeft(num: number) :void {
    this.tasksService.tasks[num].state = this.tasksService.tasks[num].state - 1
  }

  deleteTask(num: number) :void {
    this.tasksService.tasks.splice(num, 1)
  }

  addTask() {
    this.tasksService.tasks.push({title: "", content: "", state: 0, edit: true})
  }
}
