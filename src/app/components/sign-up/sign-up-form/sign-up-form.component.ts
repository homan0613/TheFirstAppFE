import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['../sign-up.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(public service:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.postSignUp().subscribe(
      res=>{
        alert("SignUp successfuly !!!");
        this.router.navigate(['/login']);
      },
      err =>{
        alert("It has some error. Please check it again!!!");
      }
    )
  }

}
