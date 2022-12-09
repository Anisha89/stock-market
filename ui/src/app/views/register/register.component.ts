import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getRoleValueByName, User } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{
  user =new User();
  roleList:string[];
  selectedValue:any;
  rolevalue:string;
  isSuccessful:boolean;
  signupFailed:boolean;

  constructor(private authservice:AuthService,private router:Router) { }
  ngOnInit(): void {
    this.selectedValue="EnterRole";
    this.roleList=User.getRole();
  
  }
  onSubmit(){
    const {username,email,password,role}=this.user
      this.authservice.register(username,email,password,role).subscribe(data=>{
      this.isSuccessful=true;
      this.router.navigate(['/login']);
   
    },err=>{
      console.log(err.response);
        this.signupFailed=true;
      })
   }
  getRole(selectedValue){
   this.rolevalue= getRoleValueByName(selectedValue);
   this.user.role=[];
   this.user.role=[...this.user.role,this.rolevalue];
   }
}
