import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

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

    if(this.loginForm.get('username')?.value == "") {
      this.displayWarning("Please enter the username");
      return;
    }
    if(this.loginForm.get('password')?.value == "") {
      this.displayWarning("Please enter the password");
      return;
    }

    if(this.loginForm.valid) {
      // let bodyData = {
      //   username: this.username,
      //   password: this.password,
      // };

      let loginBodyData = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      console.log(JSON.stringify(loginBodyData));

      //this.http.post("http://localhost:8080/api/v1/user/login", loginBodyData).subscribe((resultData: any) => {
      this.loginService.login(loginBodyData).subscribe((resultData: any) => {

        //console.log("RESULT DATA", JSON.stringify(resultData));
     
        if(resultData.status == true) {
          this.router.navigateByUrl("/main");
        }
        else if(resultData.message == "User does not exist") 
        {
          this.displayWarning("User does not exist");
       }
        else 
        {
          this.displayError("Error:\n1. Incorrect credentials\nOr\n2.Not all fields entered");
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
  
  displayInfo(message: string) {
    Swal.fire({
      title: 'Information',
      text: message,
      icon: 'info',
      confirmButtonText:'OK'
    });
  }

  displaySuccess(message: string) {
    Swal.fire({
      title: 'Success',
      text: message,
      icon: 'success',
      confirmButtonText:'OK'
    });
  }
  
  displayWarning(message: string) {
    Swal.fire({
      title: 'Warning',
      text: message,
      icon: 'warning',
      confirmButtonText:'OK'
    });
  }

  displayError(message: string) {
    Swal.fire({
      title: 'Error',
      html: message.replace(/\n/g, '<br>'),  // Replacing newlines with <br>
      icon: 'error',
      confirmButtonText:'OK'
    });
  }

}
