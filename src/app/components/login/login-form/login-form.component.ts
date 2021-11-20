import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public service:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.postLogin().subscribe(
      (res:any)=>{
        alert("Login successfuly !!!");
        console.log(res);
        localStorage.setItem('jwt', JSON.parse(JSON.stringify(res)).token);
        localStorage.setItem('userName', res.userName);
        this.router.navigate(['/listAccount']);
      },
      err =>{
        alert("It has some error. Please check it again!!!");
      }
    )
  }
}
