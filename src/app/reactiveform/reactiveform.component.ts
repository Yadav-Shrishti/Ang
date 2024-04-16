import { JsonPipe } from '@angular/common';
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
  userTypes = ['admin', 'seller', 'customer'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

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
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      userData.userId = this.generateUserId();

  
      localStorage.setItem(userData.userId, JSON.stringify(userData));
      // console.log('User registered successfully:', userData);
      this.registrationForm.reset();


      // this.router.navigate(['/login']);
    } else {
      console.error('Form is invalid');
    }
    
  }
}
 
 
 
 