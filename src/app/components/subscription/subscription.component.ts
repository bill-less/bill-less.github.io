import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppComponent } from 'src/app/app.component';
import { IContactFormData, IOrderDto, IPackage } from 'src/app/models/packages.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  validateForm!: FormGroup;
  customOrderForm!: FormGroup;

  packagesData: IPackage[] = [
    {
      packageName: 'Starter',
      content: {
        amountOfCashpoint: 1,
        amountOfReceiptsPerMonth: 100,
        amountOfAdmins: 1,
        amountOfUsers: 1,
      },
      price: 1,
      packageId: 'starter',
    },
    {
      packageName: 'Basic',
      content: {
        amountOfCashpoint: 1,
        amountOfReceiptsPerMonth: 1000,
        amountOfAdmins: 1,
        amountOfUsers: 2,
      },
      price: 1,
      packageId: 'basic',
    },
    {
      packageName: 'Classic',
      content: {
        amountOfCashpoint: 3,
        amountOfReceiptsPerMonth: 3000,
        amountOfAdmins: 2,
        amountOfUsers: 4,
      },
      price: 1,
      packageId: 'classic',
    },
    {
      packageName: 'Premium',
      content: {
        amountOfCashpoint: 6,
        amountOfReceiptsPerMonth: 6000,
        amountOfAdmins: 3,
        amountOfUsers: 8,
      },
      price: 1,
      packageId: 'premium',
    },
  ]



  selectedPackage: IPackage = {
    packageName: 'No package selected',
    content: {
      amountOfCashpoint: 0,
      amountOfReceiptsPerMonth: 0,
      amountOfAdmins: 0,
      amountOfUsers: 0,
    },
    price: 0,
    packageId: ''
  };

  isPhoneScreen = false;
  customerIsRegistered = true;
  showPackages = true;
  showOrdersContactDetailsForm = false;
  showOrderOverview = false;
  customOrder = false;
  showCustomOrderForm = false;
  showRegisterContactForm = false;
  requierementsChecked = false;
  agbChecked = false;
  privacyChecked = false;
  selectedContactOption = "email";

  screenHeight: number = 0;
  screenWidth: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contactService: ContactService,
    public appComponent: AppComponent,
    private message: NzMessageService,
  ) {
    this.getScreenSize();
   }

   @HostListener('window:resize', ['$event'])
   getScreenSize(event?: Event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.isPhoneScreen = this.screenWidth < this.screenHeight;
    console.log(this.screenHeight, this.screenWidth);
    console.log(this.isPhoneScreen);
}

  ngOnInit(): void {

    this.validateForm = this.fb.group({
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

    this.customOrderForm = this.fb.group({
      numberOfCashpoints: [null, [Validators.required]],
      numberOfReceipts: [null, [Validators.required]],
      numberOfAdmins: [null, [Validators.required]],
      numberOfUsers: [null, [Validators.required]],
    });
    
  }

  submitEnterpriseOrderForm() {
    const message = this.message;

    if (!this.customOrderForm.valid) {
      message.error('Bitte füllen Sie alle Felder aus!');
      return;
    }
    for (const i in this.customOrderForm.controls) {
      this.customOrderForm.controls[i].markAsDirty();
      this.customOrderForm.controls[i].updateValueAndValidity();
    }
    this.selectedPackage = {
      packageName: 'Enterprise',
      content: {
        amountOfCashpoint: this.customOrderForm.value.numberOfCashpoints,
        amountOfReceiptsPerMonth: this.customOrderForm.value.numberOfReceipts,
        amountOfAdmins: this.customOrderForm.value.numberOfAdmins,
        amountOfUsers: this.customOrderForm.value.numberOfUsers,
      },
      price: 0,
      packageId: 'enterprise'
    }
    this.showCustomOrderForm = false;
    this.showOrdersContactDetailsForm = true;
  }

  submitContactDetailsForm(): void {
    const message = this.message;
    if (!this.validateForm.valid) {
      message.error('Bitte füllen Sie alle Felder aus!');
      return;
    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.showOrdersContactDetailsForm = false;
    this.showOrderOverview = true;
  }

  handleClickOnPackage(selectedPackage: IPackage) {
    this.selectedPackage = selectedPackage;
    this.showPackages = false;
    this.showOrdersContactDetailsForm = true;
  }

  handleClickOnCustomePackage() {
    this.showPackages = false;
    this.showCustomOrderForm = true;
    this.customOrder = true;
  }

  handleClickOnBackToPackages() {
    this.showPackages = true;
    this.showOrdersContactDetailsForm = false;
    this.showCustomOrderForm = false;
    this.customOrder = false;
  }

  handleClickOnChangeOrderDetails() {
    this.showOrdersContactDetailsForm = false;
    this.showCustomOrderForm = true;
  }
  
  handleClickOnChangeOrderOverviewDetails() {
    this.showOrderOverview = false;
    this.showOrdersContactDetailsForm = true;
  }

  handleSubmitOrder() {
    const message = this.message;
    const customOrder = this.customOrder;
    const router = this.router;

    if (this.agbChecked && this.privacyChecked && this.requierementsChecked) {
      message.loading('Ihre Bestellung wird versendet!');
      const orderInformation: IOrderDto = this.getOrderData();
      this.contactService.order(orderInformation).subscribe({
        next(isFinished) {
          router.navigate(['']);
          if (!customOrder) {
            message.remove();
            message.success('Ihre Bestellung wurde in Auftrag gegeben und wird von uns verarbeitet!');
          }
          else {
            message.remove();
            message.success('Ihr Anfrage ist eingegeangen und wird von uns bearbeitet!');
          }
        },
        error(err) {
          message.remove();
          message.error('Leider ist ein Fehler unterlaufen. Bitte probieren Sie es noch einmal oder wenden Sie sich an unseren Support!');
        }
      });
    }
    else {
      message.error('Bitte stimmen Sie sowohl unseren AGB als auch unserer Datenschutzrichtlinie zu!');
    }
  }

  getOrderData(): IOrderDto {
    const mail: string = this.validateForm.value.email

    const contactData: IContactFormData = {
      name: this.validateForm.value.name,
      companyName: this.validateForm.value.companyName,
      street: this.validateForm.value.street,
      houseNumber: this.validateForm.value.houseNumber,
      postCode: this.validateForm.value.postCode,
      city: this.validateForm.value.city,
      email: this.validateForm.value.email,
      phoneNumber: this.validateForm.value.phoneNumber,
      serialNumber: this.validateForm.value.serialNumber,
    }

    const packageData: IPackage = {
      packageName: this.selectedPackage.packageName,
      content: this.selectedPackage.content,
      price: this.selectedPackage.price,
      packageId: this.selectedPackage.packageId,
    }

    const order: IOrderDto = {
      mail,
      contactData,
      packageData
    }

    return order;
  }


}
