import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayOfImgUrls = [
    { src: '../../../assets/1.png' },
    { src: '../../../assets/2.png' },
    { src: '../../../assets/3.png' },
    { src: '../../../assets/4.png' },
  ];

  showContactButtons = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToContact() {
    this.router.navigate(['contact']);
  }

navigateToRegister() {
  this.router.navigate(['register']);
}

navigateToSubscription() {
  this.router.navigate(['subscription']);
}


}
