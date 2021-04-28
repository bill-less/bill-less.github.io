import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cas-customer-page';
  showContactButton = true;

  constructor(
    public router: Router,
    public headerService: HeaderService,
  ) { 
  }

  ngOnInit() {

  }

  contact() {
    this.router.navigate(['contact']);
  }

  home() {
    this.router.navigate([''])
  }
}
