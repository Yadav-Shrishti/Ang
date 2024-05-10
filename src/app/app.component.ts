import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ang';
   opened=false;
sidebar: any;
  // to chk in console it will appear as opened nd close
  log(state: any){
    console.log(state)
  }
  constructor(private router :Router){} 

  redirectToForm(){
    this.router.navigate(['/rf']);
  }
}
