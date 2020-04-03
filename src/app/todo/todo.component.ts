import { Component } from '@angular/core';

@Component({
    selector : 'to-do',
    templateUrl : './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class ToDoComponent{
    todoItem: string ='';
    todoItemList: String [] = [];
    
    readMessage(evt) {
        this.todoItem = evt;
        console.log('recieved', this.todoItem);
        this.todoItemList.unshift(this.todoItem);
    }

    removeItem(item){
        this.todoItemList.splice(this.todoItemList.indexOf(item),1)
    }
}