import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { Model } from '../model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  /**
   * creating userlist array type Model[] for store data
   */
  public userList: Model[];
  /**
 * creating index type number to apply userList type Model[] for index
 */
  public index: number;
  /**
   * we can create instance of over mainServices
   */
  constructor(private _serviceResponse: MainService) { }
  /**
   * we can call getData method in mainservice
   */
  ngOnInit() {
    this.userList = this._serviceResponse.getData();
  }
  /**
  *  we can create modified mothed and its return type is Model[]
  */
  modified(index: number): Model[] {
    this.userList[index].isBoolean = true;
    console.log(this.userList);
    return this.userList;
  }

}
