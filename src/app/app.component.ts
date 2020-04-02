import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment02';
  userData : [];
  async getUserData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) { 
      this.userData = await response.json();
      console.log(this.userData);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }
}
