export class Login {
    Id:number = 0;
    Name:string = '';
    Password:string = '';
    Email:string = '';
    PhoneNumber:string = '';

    constructor(id:number = 0, name:string = '', password:string = '', email:string = '', phoneNumber:string='' ){
        this.Id = id;
        this.Name = name;
        this.Password = password;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
    }
}
