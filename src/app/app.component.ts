import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ang';
  opened = false;
  menuType: String = 'default';

  // to chk in console it will appear as opened nd close
  log(state: any) {
    console.log(state)
  }
  constructor(private route: Router) { }
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (localStorage.getItem('Users')) {
        // Determining  user types  based on URL
        if (val.url.includes('seller')) {
          this.menuType = 'seller'; // Setting menuType to 'seller' for seller user
        } else if (val.url.includes('admin')) {
          this.menuType = 'admin'; 
        } else if (val.url.includes('customer')) {
          this.menuType = 'customer'; 
        } else {
          this.menuType = 'default';
        }
      }
      }
    )
  }

  redirectToForm() {
    this.route.navigate(['/rf']);
  }
}
