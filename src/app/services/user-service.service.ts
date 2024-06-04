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
      users = [...users,user];                                              //to add the new entries in the last just swap user from ...users
    }else{
      users =[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }


  getUsers(): User[] {                                                      //to retrieve
    const usersString = localStorage.getItem('Users');
    return usersString ? JSON.parse(usersString) : [];
  }

     // Method to update user data
  updateUser(updatedUser: User) {
    const users = this.getUsers();
    const index = users.findIndex(user => user.userId === updatedUser.userId);     
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }
  // logout(): void {
  //   localStorage.removeItem('currentUser'); // Clear user data from local storage
  // }
  
  deleteUser(index: number) {
    let users = this.getUsers();
    users.splice(index, 1); // Remove the user at the specified index
    localStorage.setItem('Users', JSON.stringify(users));
  }
  getUsername(): string | null {
    // Example: Fetch username from localStorage
    return localStorage.getItem('username');
  }
}
