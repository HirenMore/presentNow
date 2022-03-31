export class Student {
    studentID: string | undefined;
    firstName: string | undefined;
    password: string | undefined;
    rollNumber: number | undefined;
    profilePicture: string | undefined;

    constructor(studentID: string, firstName: string, password: string, rollNumber: number, profilePicture: string) {
        this.studentID = studentID
        this.firstName = firstName
        this.password = password
        this.rollNumber = rollNumber
        this.profilePicture = profilePicture
    }
}