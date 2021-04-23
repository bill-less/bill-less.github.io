import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderService } from './components/services/header.service';

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

  register() {
    this.router.navigate(['register']);
  }

  home() {
    this.router.navigate([''])
  }
}
