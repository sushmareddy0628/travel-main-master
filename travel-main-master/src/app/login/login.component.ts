import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormsModule,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm!: FormGroup ;
  userForm!:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder,ft:FormsModule){}
  ngOnInit(): void 
  {
    this.signupForm=this.fb.group({
    username: ['',Validators.required],
    email: ['',Validators.required,Validators.email],
    password: ['',Validators.required]
  })
  this.userForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  }

  onSignup(){
    this.auth.signUp(this.signupForm.value).subscribe({
      next:(res)=>{
        alert(res.message)
      },
      error:(err)=>{
        alert(err?.error.message)
      }
    })
  }
  onLogin(){
    this.auth.login(this.userForm.value).subscribe({
      next:(res)=>{
        alert(res.message)
      },
      error:(err)=>{
        alert(err?.error.message)
      }
    })
  }

  
  }





