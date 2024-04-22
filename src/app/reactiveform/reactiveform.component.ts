import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  registrationForm!: FormGroup;
  user: any = {};                                                //to store form info in this variable
  userTypes = ['admin', 'seller', 'customer'];

  constructor(private formBuilder: FormBuilder,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      userType: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      confirmPassword: ['', Validators.required],

    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  generateUserId() {
    const username = this.registrationForm.value.username;
    const userType = this.registrationForm.value.userType;
    return `${userType}_${username}`;
  }


  onSubmit() {
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.user);
    this.registrationForm.reset();


  }
  // onSubmit() {
  //   if (this.registrationForm.valid) {
  //     const userData = this.registrationForm.value;
  //     userData.userId = this.generateUserId();


  //     localStorage.setItem(userData.userId, JSON.stringify(userData));
  //     console.log('User registered successfully:', userData);
  //     this.registrationForm.reset();


  //     this.router.navigate(['/login']);
  //   } else {
  //     console.error('Form is invalid');
  //   }

  // }
}



