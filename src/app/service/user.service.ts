import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable()
export class UserService {
  UserId;
  mysubobs=new Subject();
  updateuservalid(){
    this.mysubobs.next();
  }
  setuserId(id){
    this.UserId=id;
  }
  getUserId(){
    return this.UserId;
  }
}
