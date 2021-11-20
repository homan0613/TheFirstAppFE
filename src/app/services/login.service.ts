import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { AccountExport } from '../models/account-export.model';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  formData: Login = new Login();
  readonly checkLoginUrl = "http://localhost:5000/Accounts/Check";
  readonly SingUpUrl = "http://localhost:5000/Accounts";
  readonly AllAccount = "http://localhost:5000/Accounts/AccountExport";

  postLogin(){
    return this.http.post(this.checkLoginUrl, this.formData);
  }

  postSignUp(){
    return this.http.post(this.SingUpUrl, this.formData);
  }

  getAllAccount(): Observable<any>{
    return this.http.get(this.AllAccount)
    .pipe(
      catchError(this.handleError<any>('getAllAccount'))
    );
  }

  
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
