import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** 
  username:string = "";
  password:string = ""; 
  */

  loginForm!: FormGroup; // "!" to indicates the form will be initialized later, on ngOnInit

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required], 
        password: ['', Validators.required], 
      }
    );

  }


  login() {
    if(this.loginForm.valid) {

      // let bodyData = {
      //   username: this.username,
      //   password: this.password,
      // };

      let loginBodyData = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      //this.http.post("http://localhost:8080/api/v1/user/login", loginBodyData).subscribe((resultData: any) => {
      this.loginService.login(loginBodyData).subscribe((resultData: any) => {
        //console.log("RESULT DATA", JSON.stringify(resultData));
     
        if(resultData.message == "Welcome") {
          this.router.navigateByUrl("/main");
        }
        else if(resultData.message == "User does not exist") 
        {
          alert("User does not exist");
       }
        else 
        {
          alert("Error:\n1. Incorrect credentials\nOr\n2.Not all fields entered");
        }
        
    });
    }
  }

  signup() {
    
  }

  clear() {
    this.loginForm.get('username')?.setValue('');
    this.loginForm.get('password')?.setValue('');
    //this.loginForm.reset(); /** Clears the form too */
  }
  


}
