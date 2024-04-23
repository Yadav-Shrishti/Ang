import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  constructor() { }
  
  addUser(user: User){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')!);                   //Applied ! after JSON.parse 
      users = [user,...users];
    }else{
      users =[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }


  getUsers(): User[] {                                                      //to retieve
    const usersString = localStorage.getItem('Users');
    return usersString ? JSON.parse(usersString) : [];
  }

}
