import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminUserVerifyComponent } from './admin-user-verify/admin-user-verify.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserVerifyComponent } from './user-verify/user-verify.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    AdminMenuComponent,
    AdminUserVerifyComponent,
    ChangePasswordComponent,
    LoginComponent,
    MenuComponent,
    SearchStudentComponent,
    StudentDetailsComponent,
    StudentlistComponent,
    UpdateStudentComponent,
    UserAddComponent,
    UserInfoComponent,
    UserVerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
