import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent  implements OnInit{
  ngOnInit(): void {
    
  }
  usersArray:any[]=[];

  userForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('',[Validators.required,Validators.minLength(10)]),
    email: new FormControl(''),
    password:new FormControl('',[Validators.required])
  });
onSaveUser(){
  debugger;
  const obj =this.userForm.value;

}
}
