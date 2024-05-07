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
      users = [user,...users];                                              //to add the new entries in the last just swap user from ...users
    }else{
      users =[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }


  getUsers(): User[] {                                                      //to retrieve
    const usersString = localStorage.getItem('Users');
    return usersString ? JSON.parse(usersString) : [];
  }
  editUser(updatedUser: User) {
    let users = this.getUsers();
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }
  
  
  logout(): void {
    localStorage.removeItem('Users'); // Clear user data from local storage
  }
  deleteUser(userId: number) {
    let users = this.getUsers();
    users = users.filter(user => user.id !== userId);
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
