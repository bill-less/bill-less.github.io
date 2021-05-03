export interface IOrderDto {
    receiverMail: string;
    contactData: IContactFormData;
    packageData: IPackage;
}

export interface IRegisterDto {
    receiverMail: string;
    contactData: IContactFormData;
}

export interface IContactFormData {
    name: string;
    companyName: string;
    street: string;
    houseNumber: number;
    postCode: number;
    city: string;
    email: string;
    phoneNumber: string;
    serialNumber: string;
}
export interface IPackage {
    packageName: string,
    content: IPackageContent,
    price: number,
    packageId: string,
}

export interface IPackageContent {
    amountOfCashpoint: number,
    amountOfReceiptsPerMonth: number,
    amountOfAdmins: number,
    amountOfUsers: number,
}