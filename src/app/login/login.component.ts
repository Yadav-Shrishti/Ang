import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  isSignDivVisible:boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel()

  onRegister(){
    debugger;
    const localUser = localStorage.getItem('AngUser');           //Ang user is the key where we are going to store the data
    if(localUser != null) {
      const users =JSON.parse(localUser);                          //this if statemnt is responsible for if we already had the data in local
      users.push(this.signUpObj);
      localStorage.setItem('Anguser',JSON.stringify(users))
      
    }else{
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('Anguser',JSON.stringify(users))
    }
    alert('Registration Success')
  }
  }


  export class SignUpModel{
    name:string;
    email:string;
    password:string;


    constructor(){
      this.email="";
      this.name="";
      this.password="";
    }
  }
  
export class LoginModel{
  name:string;
  email:string;
  password:string;


  constructor(){
    this.email="";
    this.name="";
    this.password="";
  }
}


