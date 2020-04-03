import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'todo-form',
    template : '<input [(ngModel)]="todoItem"><button (click)="addItem()">Add</button>'
})

export class ToDoFormComponent{
    todoItem: string ='';

    @Output()
    sendRequest = new EventEmitter<string>();
    addItem() {    
        this.sendRequest.emit(this.todoItem);
  
    }
}