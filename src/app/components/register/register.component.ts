import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppComponent } from 'src/app/app.component';
import { IContactFormData, IPackage, IRegisterDto } from 'src/app/models/packages.model';
import { ContactService } from 'src/app/services/contact.service';
import { HeaderService } from '../../services/header.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  registerForm!: FormGroup;

  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contactService: ContactService,
    public appComponent: AppComponent,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      companyName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      street: [null, [Validators.required]],
      houseNumber: [null, [Validators.required]],
      postCode: [null, [Validators.required]],
      city: [null, [Validators.required]],
      phoneNumberPrefix: ['+49'],
      phoneNumber: [null, [Validators.required]],
      serialNumber: [null, [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  async handleSubmitRegisterForm() {
    const message = this.message;

    if(!this.registerForm.valid) {
      message.error('Bitte füllen Sie alle Felder aus!');
      return;
    }

    
    const router = this.router;
    message
      .loading('Infos versenden', {nzDuration: 3000})

    const registerData: IRegisterDto = this.getRegisterData();

    this.contactService.register(registerData).subscribe( {
      next(isFinished) {
        message.remove();
        message.success('Ihre Registrierungsanfrage wurde erfolgreich versendet!')  
        router.navigate(['']);    
      },
      error(err) {
        message.remove();
        message.error('Leider ist ein Fehler unterlaufen. Bitte probieren Sie es noch einmal oder wenden Sie sich an unseren Support!')
      }
    }
    );
    
  }

  getRegisterData(): IRegisterDto {
    const receiverMail: string = environment.mailForRegister;

    const contactData: IContactFormData = {
      name: this.registerForm.value.name,
      companyName: this.registerForm.value.companyName,
      street: this.registerForm.value.street,
      houseNumber: this.registerForm.value.houseNumber,
      postCode: this.registerForm.value.postCode,
      city: this.registerForm.value.city,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      serialNumber: this.registerForm.value.serialNumber,
    }

    const registerData: IRegisterDto = {
      receiverMail,
      contactData,
    }

    return registerData;
  }

}
