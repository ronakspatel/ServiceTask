
import { UserModel } from './user.model';


export class UserService {
/**
 * creating userData array type Model[] for store data
 */
public userData:UserModel[];

  constructor() { 
    /**
     * insert some record in userData array
     */
    this.userData=[
    {"id":1,"name":"Ronak","isComplete":false},
    {"id":2,"name":"Shabaz","isComplete":false},
    {"id":3,"name":"Vaibhavi","isComplete":false},
    {"id":4,"name":"Akshita","isComplete":false},
    {"id":5,"name":"Sonal","isComplete":false},
    {"id":6,"name":"Yamini","isComplete":false},
    {"id":7,"name":"Tina","isComplete":false},
    {"id":8,"name":"Roshni","isComplete":false},
  ];
  }
  /**
   * creating get method type model to get data n returns data in model[] type
   */
  getData():UserModel[]{
    
    return this.userData;
    
  }
  setData(values:UserModel[]):UserModel[]{
       
     return this.userData=values;
  }
  
  
}
