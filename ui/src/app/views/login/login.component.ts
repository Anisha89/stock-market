import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { TokenStorageService } from '../../service/tokenstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  user = new User();
  roles:string;
  constructor(private router:Router,private authservice:AuthService,private tokenService:TokenStorageService){}
  ngOnInit(): void {
    
  }
  login(){
    this.authservice.login(this.user.username,this.user.password).subscribe(data=>{
     if(data!=null){
        localStorage.setItem('isLoggedIn','true');
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);
        this.roles = this.tokenService.getUser().roles;
        let role=this.roles[0];
         localStorage.setItem('role',role);
        this.router.navigate(['/dashboard']);
      }
    },err=>{
      localStorage.setItem('isLoggedIn','false');
    })
   
  }
  goToRegister(){
   this.router.navigate(['/register']);
  }
  goToForgotPassword(){
    this.router.navigate([ `/forgot`])
  }
}
