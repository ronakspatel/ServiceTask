import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html'

})
export class TaskCompletedComponent implements OnInit {
  /**
   * creating userConfirm array type UserModel[] for get value from parrent
   */
 
  public userConfirm: UserModel[];
  
  //inject  mainServices
  constructor(private serviceResponse: UserService) { 

  }
  // call getData method in mainservice
  ngOnInit() {
    this.userConfirm=this.serviceResponse.getData();
    
  }
 
}
