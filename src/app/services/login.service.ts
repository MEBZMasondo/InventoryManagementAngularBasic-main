import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }


  login(loginBody : any) {

    //console.log("LOGIN " + JSON.stringify(loginBody))
  
    const httpOptions = {
      headers: new HttpHeaders({
        //LOGIN_SESSION: session
      }),
    };

    return this.http.post<any>('http://localhost:8080/api/v1/user/login', loginBody, httpOptions);
  }

}
