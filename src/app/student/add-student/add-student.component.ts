import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  submitted: boolean = true;
  constructor() {

  }
  student: FormGroup;
  ngOnInit(): void {
    this.student = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.nullValidator
      ]),
      password: new FormControl('', [Validators.required, Validators.nullValidator, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]),
      gender: new FormControl(''),
      customGender: new FormControl(''),
      rollNumber: new FormControl('', [Validators.required, Validators.min(1)]),
      location: new FormControl(''),
      customLocation: new FormControl('')
    });

    this.setEventListeners();

  }
  setEventListeners() {
    // removing any value entered to customGender when gender value is changed for other to anything else
    this.student?.get('gender').valueChanges.subscribe(val => {
      if (val.toLowerCase() != 'other') {
        this.student.get('customGender').setValue('')
      }
    })
    // removing any value entered to customLocation when location value is changed for other to anything else
    this.student?.get('location').valueChanges.subscribe(val => {
      if (val.toLowerCase() != 'other') {
        this.student.get('customLocation').setValue('')
      }
    })

    this.student?.get('password').valueChanges.subscribe(val => {
      if (this.student.get('password').errors === null) {
        return;
      }
      let errorList: ValidationErrors = this.student?.get('password').errors;
      errorList['isLowerCaseError'] = (val.match('(?=.*[a-z])') === null) ? true : false;
      errorList['isUpperCaseError'] = (val.match('(?=.*[A-Z])') === null) ? true : false;
      errorList['isDigitError'] = (val.match('(?=.*[0-9])') === null) ? true : false;
      errorList['isSpecialCharacterError'] = (val.match('(?=.*[$@$!%*?&])') === null) ? true : false;
      errorList['isLenghtSort'] = (val.match('[A-Za-z\d$@$!%*?&].{8,}$') === null) ? true : false;
      this.student?.get('password').setErrors(errorList)
    })
  }
  StudentControls() {
    return this.student.controls;
  }
  onGenderSelected() {
    console.log(this.student.get('gender'));
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
