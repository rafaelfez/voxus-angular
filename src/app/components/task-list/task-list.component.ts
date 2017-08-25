import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Object[];

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.tasks = this.dataService.getTasks();
  }

  addTask(task:Task){
    this.dataService.addTask(task);
  }

}
