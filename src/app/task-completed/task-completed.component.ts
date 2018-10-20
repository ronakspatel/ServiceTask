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
  public filterData=[];
  //inject  mainServices
  constructor(private serviceResponse: UserService) { 

  }
  // call getData method in mainservice
  ngOnInit() {
    
  }
  ngAfterViewChecked(){
    this.userConfirm=this.serviceResponse.getData();
        this.userConfirm.forEach(element => {
          if (element.isComplete==true) {
            this.filterData.push(element);
          }
        });
        console.log(this.filterData);

    }

}
