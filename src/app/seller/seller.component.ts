// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { UserServiceService } from '../services/user-service.service';
// import { User } from '../model/user';
// import { AuthService } from '../services/auth.service';
// import { AlertifyService } from '../services/alertify.service';

// @Component({
//   selector: 'app-seller',
//   templateUrl: './seller.component.html',
//   styleUrls: ['./seller.component.scss']
// })
// export class SellerComponent implements OnInit {
//   users: User[] = [];
//   router: any;
//   menuType: string = 'default';
//   authService: any;
//   userService: any;

//   constructor(private authservice:AuthService,private alertify:AlertifyService) { }

//   ngOnInit(): void {
//     Retrieve saved user data from local storage
//     this.users = this.userService.getUsers();
//   }
  
 


// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  menuType: string = 'default';
  sellerName:string='';

  constructor(private authService: AuthService, private alertify: AlertifyService) { }


// to present the loggedin username

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')){
      let sellerStore = localStorage.getItem('currentUser');
      let sellerData = sellerStore && JSON.parse(sellerStore);
      this.sellerName = sellerData.username; 
    }
  }

  logout() {
    this.authService.logout();
    
  }
}
