import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';

@Component({
    selector : 'comment-list',
    templateUrl : './comment.component.html'
})

export class CommentComponent implements OnInit{
    message : []; //for transfering to view

    constructor(private helloService: CommentService) { }
   
    ngOnInit() {
  
      // Get the data by calling service object and update message
  
      //this.message = this.helloService.sayHello();
  
      // this.helloService.sayHello(message => {
  
      //   this.message = message;
  
      // });
  
      this.helloService.sayHello().then(message => {
        
        this.message = message;
  
      });
  
    }  
}