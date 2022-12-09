import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: UsersComponent,
        data: {
          title: 'list'
        }
      },
      {
        path: 'add',
        component: AdduserComponent,
        data: {
          title: 'add'
        }
      },
      {
        path: 'edit/:id',
        component: EdituserComponent,
        data: {
          title: 'edit'
        }
      }
    ]
  }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
