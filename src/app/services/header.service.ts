import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeaderService implements OnInit{

  private switchButtonToHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    //this.switchButtonToHome = this.router.isActive('register', true)
  }

  changeButtonToHome(switchButtonToHome: boolean) {
    this.switchButtonToHome = switchButtonToHome;
  }


  getSwitchButtonToHome() {
    if(this.router.isActive('register', true)) {
      this.switchButtonToHome = true;
    }
    else if(this.router.isActive('subscription', true)) {
      this.switchButtonToHome = true;
    }
    else if(this.router.isActive('contact', true)) {
      this.switchButtonToHome = true;
    }
    else {
      this.switchButtonToHome = false;
    }
    
    return this.switchButtonToHome;
  }


}
