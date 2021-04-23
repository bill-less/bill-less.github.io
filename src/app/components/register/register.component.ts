import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { AppComponent } from 'src/app/app.component';
import { IPackage } from 'src/app/models/packages.model';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;
  customOrderForm!: FormGroup;
  registerForm!: FormGroup;

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



  showButtons = true;
  customerIsRegistered = false;
  showPackages = false;
  showOrdersContactDetailsForm = false;
  showOrderOverview = false;
  customOrder = false;
  showCustomOrderForm = false;
  showRegisterContactForm = false;
  agbChecked = false;
  privacyChecked = false;
  selectedContactOption = "email";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public appComponent: AppComponent,
  ) { }

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

    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      companyName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumberPrefix: ['+49'],
      phoneNumber: [null, [Validators.required]],
      serialNumber: [null, [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  submitEnterpriseOrderForm() {
    if (!this.customOrderForm.valid) {
      alert('Bitte füllen Sie alle Felder aus!')
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
      price: "",
      packageId: 'enterprise'
    }
    this.showCustomOrderForm = false;
    this.showOrdersContactDetailsForm = true;
  }

  submitContactDetailsForm(): void {
    if (!this.validateForm.valid) {
      alert('Bitte füllen Sie alle Felder aus!')
      return;
    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.showOrdersContactDetailsForm = false;
    this.showOrderOverview = true;
  }

 /*  updateConfirmValidator(): void {

    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }; */


  handleCustomerIsRegistered() {
    this.customerIsRegistered = true;
    this.showButtons = false;
    this.showPackages = true;
  }

  handleCustomerIsNotRegistered() {
    this.customerIsRegistered = false;
    this.showButtons = false;
    this.showRegisterContactForm = true;
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

  handleSubmitOrder() {
    if (this.agbChecked && this.privacyChecked) {
      if (!this.customOrder) {
        alert('Ihre Bestellung wurde in Auftrag gegeben und wird von uns verarbeitet!');
      }
      else {
        alert('Ihr Anfrage ist eingegeangen und wird von uns bearbeitet!');
      }
      console.log(this.selectedContactOption)
      this.router.navigate(['']);
    }
    else {
      alert('Bitte stimmen Sie sowohl unseren AGB als auch unserer Datenschutzrichtlinie zu!')
    }
  }

  handleSubmitRegisterForm() {

  }

}
