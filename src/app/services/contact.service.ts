import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IOrderDto, IRegisterDto } from '../models/packages.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  order(orderInformation: IOrderDto) {
    return this.http.post<any>(`${environment.host}/mail/order`, orderInformation).pipe(
        map((response) => {
            console.log('funktioniert auch');
            return true;
        })
    )
  }

  register(registerInformation: IRegisterDto) {
      return this.http.post<any>(`${environment.host}/mail/register`, registerInformation).pipe(
          map((response) => {

              return true;
          })
      )
  }


}
