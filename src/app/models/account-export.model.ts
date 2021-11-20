export class AccountExport {
    Id:number = 0;
    Name:string = '';
    Email:string = '';
    PhoneNumber:string = '';

    constructor(id:number = 0, name:string = '',email:string = '', phoneNumber:string='' ){
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
    }
}
