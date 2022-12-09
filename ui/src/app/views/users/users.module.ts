import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from '../../service/users.service';
import { UsersComponent } from './users.component';
import { authInterceptorProviders } from '../../helpers/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from '../../pagination/pagination.module';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';




@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    EdituserComponent
  ],
  exports:[
    UsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NgxPaginationModule,
    PaginationModule,
    FormsModule
    
  ],
  providers:[UsersService,authInterceptorProviders]
})
export class UsersModule { }
