import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm! : FormGroup;
  constructor(
    private router: Router,
    private service:UserService
    ) {
      this.signupForm=new FormGroup({
        userId:new FormControl('',[Validators.required]),
        username:new FormControl('',[Validators.required]),
        Email:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required]),

      });
     }
     ngOnInit(): void {
       
     }
     signUp() {
      let user= {
        userId: this.signupForm.value.userId,
        username:this.signupForm.value.username,
        email:this.signupForm.value.Email,
        password:this.signupForm.value.password
      }
      this.service.registerUserRemote(user)
      .subscribe(
        (data)=>{
          console.log(data)
        
        }
      )

     alert("Successfully Registerd");
      this.router.navigate(["./login"]);
    }
}


