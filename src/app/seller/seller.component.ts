import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent  implements OnInit{
  users: User[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    // Retrieve saved user data from local storage
    this.users = this.userService.getUsers();
  }
// auth: any;
//   router: any;
// User: any;
//   ngOnInit(): void {
    
//   }
//   usersArray:any[]=[];

//   userForm: FormGroup = new FormGroup({
//     id: new FormControl('0'),
//     name: new FormControl('',[Validators.required,Validators.minLength(10)]),
//     email: new FormControl(''),
//     password:new FormControl('',[Validators.required])
//   });
// onSaveUser(){
//   debugger;
//   const obj =this.userForm.value;

// }
// logout(): void {
//   localStorage.removeItem('Users');
//   this.router.navigate(['/login']);
// }

}
