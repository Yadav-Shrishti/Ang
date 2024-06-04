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
          this.menuType = 'seller'; // Set menuType to 'seller' for seller user
        } else if (val.url.includes('admin')) {
          this.menuType = 'admin'; // Set menuType to 'admin' for admin user
        } else if (val.url.includes('customer')) {
          this.menuType = 'customer'; // Set menuType to 'customer' for customer user
        } else {
          this.menuType = 'default'; // Set menuType to 'default' for other cases
        }
      }
      }
    )
  }

  redirectToForm() {
    this.route.navigate(['/rf']);
  }
}
