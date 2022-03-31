import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  submitted: boolean = true;

  constructor() {

  }
  student = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.nullValidator, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)')]),
    lastName: new FormControl('', [Validators.required, Validators.nullValidator]),
    rollNumber: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  ngOnInit(): void {
  }
  StudentControls() {
    return this.student.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.student.controls['firstName'].errors)
    if (this.student.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.student.value);
    }
  }
}