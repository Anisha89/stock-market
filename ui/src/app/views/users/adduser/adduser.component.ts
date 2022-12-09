import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getRoleValueByName, User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
roleList:string[];
user=new User();
selectedValue:any;
rolevalue:string;
  constructor(private router:Router,private service:AuthService) { }

  ngOnInit(): void {
    this.roleList=User.getRole();
  }
  onSubmit(){
    const {username,email,password,role}=this.user
    this.service.register(username,email,password,role).subscribe(data=>{
    this.router.navigate([`/users/list`])
  })
}
  goBack(){
    this.router.navigate([`/users/list`])
  }
  getRole(selectedValue){
    this.rolevalue= getRoleValueByName(selectedValue)
    this.user.role=[];
    this.user.role=[...this.user.role,this.rolevalue];
    }

}
