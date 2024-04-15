import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  userName: any;
 disabled: any;
  constructor(private fb: FormBuilder, private userService: UserServiceService) { }
  registrationForm !: FormGroup;
  user!: User;


  ngOnInit() {

    this.createregistrationForm();
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null,Validators.required),
    //   email: new FormControl(null,[Validators.required,Validators.email]),
    //   password: new FormControl(null,[Validators.required,Validators.minLength(8), Validators.pattern(
    //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    //   ),]),
    //   confirmPassword: new FormControl(Validators.required)
    // });

  }
  createregistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      userType: [null, [Validators.required]],
      confirmPassword: [null],
      userId: [null]

    });

  }

  // passwordmatch(fg:FormGroup): Validators{
  //   return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched :true};
  // }

  onSubmit() {
    console.log(this.registrationForm.value);
    // this.user = Object.assign(this.user, this.registrationForm.value);
    // localStorage.setItem('Users',JSON.stringify(this.user))
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
  }

  userData():User{
    return this.user = {
      userName:this.userName.value,

    }



    get userName(){
      return this.registrationForm.get('userName') as FormControl;
    }

  }



  GenerateUsername() {
    let userid = '';
    const uName: string = this.registrationForm.get('userName')?.value;
    const uType: string = this.registrationForm.get('userType')?.value;


    if (uName.length >= 5) {
      userid += uName.slice(0, 5);
    }
    else {
      userid += uName;
    }

    if (uType.length >= 3) {
      userid += uType.slice(0, 3);
    }
    else {
      userid += uType;
    }



    userid = userid.toLowerCase();
  }
}