import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable()
export class MainService {
/**
 * creating userData array type Model[] for store data
 */
public userData:Model[];

  constructor() { 
    /**
     * insert some record in userData array
     */
    this.userData=[
    {"id":1,"name":"Ronak","isBoolean":true},
    {"id":2,"name":"Shabaz","isBoolean":false},
    {"id":3,"name":"Vaibhavi","isBoolean":false},
    {"id":4,"name":"Akshita","isBoolean":false},
    {"id":5,"name":"Sonal","isBoolean":false},
    {"id":6,"name":"Yamini","isBoolean":true}];
  }
  /**
   * creating get method type model to get data n returns data in model[] type
   */
  getData():Model[]{
    return this.userData;
  }
}
