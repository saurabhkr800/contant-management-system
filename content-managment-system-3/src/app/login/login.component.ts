import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform!: FormGroup
  constructor(   private service:UserService,private router:Router) { 
    
    this.loginform=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    });
    
  }

  ngOnInit(): void {
    
  }
  login() {
    let user= {
      userId: this.loginform.value.userId,
      username:this.loginform.value.username,
      email:this.loginform.value.Email,
      password:this.loginform.value.password
      
    }
    this.service.loginUserRemote(user)
    .subscribe(
      (data)=>{
        console.log(data)
      
      }
    )
   alert("Successfully login");
   this.router.navigate(['./home']);

  }
}


