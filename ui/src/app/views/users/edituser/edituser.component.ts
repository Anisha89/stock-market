import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getRoleValueByName, User } from '../../../model/user';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
user=new User();
role:string;
roleList:string[];
roleValue:string;
selectedValue:any;
  constructor(private route:ActivatedRoute,private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.roleList=User.getRole();
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userService.getbyId(id).subscribe(data=>{
    this.user=data;
   })
  }
onUpdate(){
  console.log(this.user)
this.userService.update(this.user).subscribe(data=>{
 this.router.navigate([`/users/list`])
})
 
}
goBack(){
  this.router.navigate([`/users/list`]) 
}
getRole(selectedValue){
  this.roleValue= getRoleValueByName(selectedValue)
  this.user.role=[];
  this.user.roles=[...this.user.role,this.roleValue];
  }
}
