import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
user= new User();
token:any;
value:any;
reset:string; 
msg:boolean;
failmsg:string;
  constructor(private activatedRoute:ActivatedRoute,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    
    this.activatedRoute.queryParams.subscribe((params: Params) => {
     this.token=params//params(token)
     let resettoken= Object.values(this.token);//valueoftoken
     this.value=resettoken.toString();//object to string token
     this.reset=this.value.toString();//string of resettoken
 });
  }
  resetuserpwd(){
   this.authService.reset(this.reset,this.user.password).subscribe(data=>{
    this.msg=true;
    this.router.navigate(['/login'])
   },error=>{
     this.failmsg="Please try Forgotten password Again";
   })
}

}
