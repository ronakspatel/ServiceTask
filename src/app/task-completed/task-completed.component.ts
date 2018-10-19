import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html'

})
export class TaskCompletedComponent implements OnInit {
  /**
   * creating userConfirm array type model[] for get value from parrent
   */
  @Input()
  public userConfirm: Model[];
  constructor() { }
  ngOnInit() {
  }

}
