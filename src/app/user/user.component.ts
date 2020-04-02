import { Component, Input } from '@angular/core';

@Component({
    selector : 'user-info',
    templateUrl : './user.component.html',
    styleUrls: ['./user.style.css']
})

export class UserComponent{
@Input('user') userInfo ;
}