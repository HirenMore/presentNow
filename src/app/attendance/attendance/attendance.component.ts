import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/service/common/toaster.service';
import { Student } from 'src/app/student/classes/student';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  studentList: Array<Student> = new Array<Student>();
  presentStudentList: Array<Student> = new Array<Student>();
  absentStudentList: Array<Student> = new Array<Student>();
  constructor(private toaster: ToasterService) { }

  ngOnInit(): void {
    this.studentList = new Array<Student>();
    this.pushDataToStudentList();
  }
  pushDataToStudentList() {
    this.studentList.push(new Student("1", "Kratos", "Spartan", 1, ""))
    this.studentList.push(new Student("2", "Evie", "Fraye", 2, ""))
    this.studentList.push(new Student("3", "Jackob", "Fraye", 3, ""))
    this.studentList.push(new Student("4", "Altair", "Asessin", 4, ""))
    this.studentList.push(new Student("5", "Edward", "Kenway", 5, ""))
    this.studentList.push(new Student("6", "Hythem", "Kenway", 6, ""))
  }

  onPresentClicked(student: Student) {
    this.toaster.showSuccess();
    this.sendStudentToPresentStudentList(student);
    this.removeStudentFromStudentList(student);
  }
  onAbsentClicked(student: Student) {
    this.toaster.showFailure("", `${student.firstName} ${student.password} is absent`)
    this.sendStudentToPresentStudentList(student);
    this.removeStudentFromStudentList(student);
  }

  removeStudentFromStudentList(student: Student) {
    this.studentList.splice(this.studentList.findIndex(x => x.studentID = student.studentID), 1);
  }
  sendStudentToPresentStudentList(student: Student) {
    this.presentStudentList.push(student);
  }

  sendStudentToAbsentStudentList(student: Student) {
    this.absentStudentList.push(student);
  }

}
