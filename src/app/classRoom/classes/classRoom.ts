import { Student } from "src/app/student/classes/student";

export class ClassRoom {
    classID: string | undefined;
    name: string | undefined;
    division: string | undefined;
    studentList: Array<Student> | Array<Student> = [];
}