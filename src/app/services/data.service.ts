import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable()
export class DataService {

  tasks:Task[];

  constructor() { }

  getTasks(){

    if(localStorage.getItem('tasks') === null){
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addTask(task:Task){
    this.tasks.unshift(task); 

    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {

      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

  }

  removeTask(task:Task){
    for(let i=0; i<this.tasks.length; i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

}
