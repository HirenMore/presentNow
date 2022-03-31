import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { AttendanceComponent } from './attendance/attendance/attendance.component';
import { ToastrModule } from 'ngx-toastr';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './basic/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentProfileComponent,
    AttendanceComponent,
    AddStudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
