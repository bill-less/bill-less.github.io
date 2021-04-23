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
    this.switchButtonToHome = this.router.isActive('register', true);
    return this.switchButtonToHome;
  }


}
