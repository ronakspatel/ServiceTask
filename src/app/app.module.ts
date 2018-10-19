import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCompletedComponent } from './task-completed/task-completed.component';

import {MainService} from './main.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCompletedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
