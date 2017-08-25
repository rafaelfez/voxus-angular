import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task:Task;

  constructor(
    public dataService:DataService
  ) { }

  ngOnInit() {
  }

  removeTask(task){
    this.dataService.removeTask(task);
  }

}
