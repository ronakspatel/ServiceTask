import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCompletedComponent } from './task-completed/task-completed.component';

import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCompletedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
