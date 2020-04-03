import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './user/address/address.component';
import { CompanyComponent } from './user/company/company.component';
import { ToDoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ToDoFormComponent } from './todo/todoform.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,UserComponent,AddressComponent,CompanyComponent,ToDoComponent,ToDoFormComponent,CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
