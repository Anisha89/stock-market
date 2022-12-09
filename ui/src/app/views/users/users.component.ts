import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../../model/user';
import { UsersService } from '../../service/users.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


usersList:User[]=[];
user=new User();
page:number=1;

  constructor( private usersService:UsersService,private router:Router) { }

  ngOnInit(): void
  {
  this.getAllUsers();
    
  }
getAllUsers() {
    this.usersService.getAll().subscribe(res=>{
        this.usersList = res;
        console.log(this.usersList)
     
        
    },err=>{
      console.log("error while fetching data.")
    });
  }

addUser(){
    this.router.navigate(['/users/add'])
  }
 
edituser(id:number){
  console.log("id :"+ id)
   this.router.navigate([`/users/edit`,id])
}


deleteUser(user:User){

  this.usersService.delete(user.id).subscribe(res=>{
    console.log(res);
    alert('user deleted successfully');
    this.getAllUsers();
  },err => {
    console.log(err);
  });

}

changebyId(id:number){
this.usersService.getbyId(id).subscribe(data=>{
   this.user.username=data.username;
})

}
changePassword(user:User){
  this.usersService.changepassword(user).subscribe(data=>{
   alert("Password Updated SuccessFully");
   this.router.navigate([`users/list`])
    
 })
}

reload(){
  this.router.navigate([`/users/list`]);
}
}


