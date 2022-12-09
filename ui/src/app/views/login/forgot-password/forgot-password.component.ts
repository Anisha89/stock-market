import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
user=new User();
modalRef: BsModalRef;
mail:any;
resettoken:any;
getmsg:any;

constructor(private authService:AuthService,private modalService: BsModalService,private router:Router) { }

ngOnInit(): void {
    this.getmsg="";
}
openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
}
gotoconfirm()
  {
    this.authService.forgot(this.user.email).subscribe(
    response => {
    this.getmsg="Reset Link send to your"+ this.user.email;
    this.router.navigate(['/login']);
  },error=>{
     this.getmsg="Mail is not send your" +this.user.email;
    });
  }
 gotoback()
  {
    this.router.navigate([`\login`]);
  }

}
