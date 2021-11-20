import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { AccountExport } from 'src/app/models/account-export.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list-account-form',
  templateUrl: './list-account-form.component.html',
  styles: [
  ],
  providers: [LoginService]
})
export class ListAccountFormComponent implements OnInit {

  AccountList: AccountExport[];
  constructor( private service : LoginService) {}

  ngOnInit() {
    this.getAccount();
    console.log(this.AccountList);
  }

  getAccount():void{
    this.service.getAllAccount().subscribe(
      accountList => {
        this.AccountList = accountList;
        //console.log(this.AccountList[0]);
        //rs.forEach(item => this.AccountList.push(item));
      });
  }

}
