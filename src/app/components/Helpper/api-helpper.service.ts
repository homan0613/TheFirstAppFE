import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHelpperService {

  constructor(private http:HttpClient) { }
  RootUrl : string = "http://localhost:5000";
  DefaultOption = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  ,withCredentials: true}

  GetApiById(controller : string, id:string){
    var url = `${this.RootUrl}/${controller}/${id}`;
    return this.http.get(url);
  }

  GetApiByIdWithOption(controller : string, id:string, option:any = ''){
    var url = `${this.RootUrl}/${controller}/${id}`;
    if(option.toString() == ''){
      option = this.DefaultOption
    }
    return this.http.get(url, option);
  }

  GetApi(controller:string){
    var url = `${this.RootUrl}/${controller}`;
    return this.http.get(url);
  }

  GetApiWithOption(controller:string, option:any = ''){
    var url = `${this.RootUrl}/${controller}`;
    if(option.toString() == ''){
      option = this.DefaultOption
    }
    return this.http.get(url,option)
  }

  PostApi(controller:string, data: any){
    var url = `${this.RootUrl}/${controller}`;
    return this.http.post(url, data);
  }

  PostApiWithId(controller:string, id: string, data: any){
    var url = `${this.RootUrl}/${controller}/${id}`;
    return this.http.post(url, data);
  }

  PostApiWithOption(controller:string,data: any, option:any = ''){
    var url = `${this.RootUrl}/${controller}`;
    if(option.toString() == ''){
      option = this.DefaultOption
    }
    return this.http.post(url, data ,option)
  }

  PostApiWithOptionAndId(controller:string, id: string, data: any, option:any = ''){
    var url = `${this.RootUrl}/${controller}/${id}`;
    if(option.toString() == ''){
      option = this.DefaultOption
    }
    return this.http.post(url, data ,option)
  }
  PutApi(controller:string, data: any){
    var url = `${this.RootUrl}/${controller}`;
    return this.http.put(url, data);
  }

  PutApiWithId(controller:string, id: string, data: any){
    var url = `${this.RootUrl}/${controller}/${id}`;
    return this.http.put(url, data);
  }

  PutApiWithOption(controller:string, data: any, option:any = ''){
    var url = `${this.RootUrl}/${controller}`;
    if(option.toString() == ''){
      option = this.DefaultOption
    }
    return this.http.put(url, data ,option);
  }
  
  DeleteApi(controller:string, id: string){
    var url = `${this.RootUrl}/${controller}/${id}`;
    return this.http.delete(url);
  }
  
  DeleteApiWithOption(controller:string, id: string, data: any, option:any = ''){
    var url = `${this.RootUrl}/${controller}/${id}`;
    if(option.toString() == ''){
      option = this.DefaultOption
    }
    return this.http.delete(url, option);
  }

  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
