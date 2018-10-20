import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  
   // creating userlist array type UserModel[] for store data
   
  public userList: UserModel[];
  public filterDataList=[];
 

  //inject  mainServices

  constructor(private serviceResponse: UserService) { }

  // call getData method in mainservice

  ngOnInit() {
    this.userList = this.serviceResponse.getData();
   
  }

  // create modified mothed and its return type is UserModel[]

  modified(index: number): UserModel[] {
    this.userList[index].isComplete = true;
    this.serviceResponse.setData(this.userList);
    return this.userList;
  }

}
