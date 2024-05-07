import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent  implements OnInit{
  users: User[] = [];
  router: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    // to retrieve saved user data from local storage
    this.users = this.userService.getUsers();
  }

  editUser(user: User) {
    // Navigate to edit user page with user id as route parameter
    this.router.navigate(['/rf', user.id]);
  }
  

  deleteUser(userId: number) {
    // Delete user from the list and update local storage
    this.userService.deleteUser(userId);
    // Reload users after deletion
    this.users = this.userService.getUsers();
  }

}
