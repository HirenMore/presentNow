import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student/classes/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }
  public studentList: Array<Student> | Array<Student> = [];
  public displayedColumns: string[] = ['First name', 'Last name', 'Roll No', 'Attendance'];

  ngOnInit(): void {

  }
}