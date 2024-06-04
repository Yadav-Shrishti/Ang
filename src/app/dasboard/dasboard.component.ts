import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  users: User[] = [];
  router: any;
  editedUser: User | null = null;
registrationForm: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    // to retrieve saved user data from local storage
    this.users = this.userService.getUsers();
  }
  
  deleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }

  editUser(user: User) {
    this.editedUser = { ...user };         //user being edited
  }

  saveUserChanges() {
    if (this.editedUser) {
      const index = this.users.findIndex(u => u.userId === this.editedUser!.userId);         // to update the user in the list
      if (index !== -1) {
        this.users[index] = { ...this.editedUser };
        this.userService.updateUser(this.editedUser);                                         // to update the user in local storage
        this.editedUser = null;                                                                // Reset editedUser to null
      }
    }
  }
  // logout(): void {
    //   localStorage.removeItem('Users');
    //   this.router.navigate(['/login']);
    // }
}
