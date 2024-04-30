import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserServiceService, private router: Router) {}

  login(username: string, password: string): boolean {
    const users = this.userService.getUsers();
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  redirectToDashboard(username: string) {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    switch (user.userType) {
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'seller':
        this.router.navigate(['/seller']);
        break;
      case 'customer':
        this.router.navigate(['/customer']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
  
}
