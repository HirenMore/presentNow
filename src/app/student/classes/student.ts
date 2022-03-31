export class Student {
    studentID: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    rollNumber: number | undefined;
    profilePicture: string | undefined;

    constructor(studentID: string, firstName: string, lastName: string, rollNumber: number, profilePicture: string) {
        this.studentID = studentID
        this.firstName = firstName
        this.lastName = lastName
        this.rollNumber = rollNumber
        this.profilePicture = profilePicture
    }
}