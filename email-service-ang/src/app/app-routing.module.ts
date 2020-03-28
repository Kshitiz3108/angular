import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MenuComponent } from './menu/menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserVerifyComponent } from './user-verify/user-verify.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {path:'',redirectTo:'register-user',pathMatch:"full"},
  {path:'home',
    component:MenuComponent,
    children:[ 
     {path:'view-student',component:StudentlistComponent},
     {path:'add-students',component:AddStudentComponent},
     {path:'students',component:StudentlistComponent},
     {path: 'student/:id', component: StudentDetailsComponent},
     {path:'updateStudent/:id',component:UpdateStudentComponent},
     {path:'change-password',component:ChangePasswordComponent},
     {path:'search-students',component:SearchStudentComponent},
    ]
  },
  {path:'admin',
    component:AdminMenuComponent,
    children:[
      {path:'user-verify',component:UserVerifyComponent},
      {path:'user-add',component:UserAddComponent},
      {path:'view-student',component:StudentlistComponent},
      {path:'add-students',component:AddStudentComponent},
      {path:'students',component:StudentlistComponent},
      {path: 'student/:id', component: StudentDetailsComponent},
      {path:'updateStudent/:id',component:UpdateStudentComponent},
      {path:'change-password',component:ChangePasswordComponent},
      {path:'search-students',component:SearchStudentComponent},
    ]
  },
  {path:'register-user',component:LoginComponent},
  {path:'login-user',component:LoginComponent},
  {path:'user-info',component:UserInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
