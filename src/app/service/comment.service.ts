import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({

    providedIn: 'root'

})

export class CommentService {

    constructor() { }

    //Api:Sync

    // public sayHello() {

    //     return 'Hello Angular Developer'

    // }

    // public sayHello(cb) {

    //     setTimeout(cb, 5000, 'Hello Angular Developer!');

    // }
    //response : Promise<[]>;
    public async sayHello(): Promise<[]> {

         return new Promise<[]>((resolve, reject) => {

            //setTimeout(resolve, 5000, 'Hello Angular Developer!');
            fetch('https://jsonplaceholder.typicode.com/comments').then(response =>{
                if (response.ok) { 
                     //response.json()
                    
                   console.log(response);
                   return response;
                  } else {
                    alert("HTTP-Error: " + response.status);
                  }
                })
            });

        }   

    };


