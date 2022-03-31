import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance/attendance.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { Student } from './student/classes/student';

const routes: Routes = [{ path: '', component: AddStudentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
