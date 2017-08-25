import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() taskAdded = new EventEmitter<Task>();

  nome:string;
  status:string;
  prioridade:number;
  descricao:string;
  submeteu:string;
  concluiu:string;

  constructor() { }

  ngOnInit() {
  }

  addTask(){
    this.taskAdded.emit({nome:this.nome, status:this.status, 
      prioridade:this.prioridade, descricao:this.descricao, 
    submeteu:this.submeteu, concluiu:this.concluiu, hide:true});
  }

}
