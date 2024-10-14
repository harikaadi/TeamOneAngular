import { Router } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../model/user.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  token:string=''; 
  loginErrMsg:string='';
  user:User;

  constructor(private userService:UserService,private router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]), 
      password: new FormControl('', Validators.required)
    });
  }

  onLogin(){
    
    this.userService.getToken( this.loginForm.value.username,  this.loginForm.value.password)
    .subscribe({
            next: (data)=>{
            this.token = data.token; 
              console.log(this.token)
              this.userService.getUserDetails(this.token)
              .subscribe({
                next :(data)=>{
                  this.user=data;
                  //save the user details in locolstorage
                  localStorage.setItem('token',this.token);
                  localStorage.setItem('username',this.user.username);
                  localStorage.setItem('role',this.user.role);
                  switch(this.user.role){
                    case 'ROLE_PATIENT':
                     console.log('in patient dashboard')
                      break; 
                    case 'ROLE_OPDPATIENT':
                      console.log('opd patient')
                      this.router.navigateByUrl('opddashboard')
                      break;
                    case 'ROLE_ADMIN':
                      this.router.navigateByUrl('admin/dashboard')
                      break;
                    case 'ROLE_DOCTOR':
                      this.router.navigateByUrl('doctor/dashboard')
                      break;
                    case 'ROLE_EXECUTIVE':
                      this.router.navigateByUrl('executive/dashboard')
                      break;
                    
                    default:
                      console.log('in default  dashboard')
                      break; 
                     /* switch(this.user.role){
                        case 'ROLE_ADMIN':
                          this.router.navigateByUrl('/admin/dashboard')
                          break; 
                        case 'ROLE_PATIENT':
                          this.router.navigateByUrl('/patient/dashboard')
                          break; 
                        case 'ROLE_DOCTOR':
                          this.router.navigateByUrl('/doctor/dashboard')
                          break;
                        default:
                          this.router.navigateByUrl('/page-not-found')
                          break; 
                      }*/
                  }
                },
                error :(err)=>{
                  console.log(err)
                }
              })
            },
            error:(err)=>{
              console.log('in error....')
              console.log(err)
              this.loginErrMsg = 'Invalid Credentials'; 
            }
          })
  }

}
