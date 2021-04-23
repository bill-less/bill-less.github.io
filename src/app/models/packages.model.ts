export interface IPackage {
    packageName: string,
    content: IPackageContent,
    price: number | string,
    packageId: string,
}

export interface IPackageContent {
    amountOfCashpoint: number,
    amountOfReceiptsPerMonth: number,
    amountOfAdmins: number,
    amountOfUsers: number,
}