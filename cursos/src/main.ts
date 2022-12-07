import { Activity } from "./entities/activity.entity";
import { GradeBookSetup } from "./entities/gradeBookSetup.entity";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";
import {Grade} from "./entities/grade.entity";
import {Area} from "./entities/area.entity";
import { SummaryGrade } from "./entities/summaryGrades.entity";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities: Activity[] = [];
let gradeBooksSetup: GradeBookSetup[] = [];
let grades: Grade[] = [];
let areas: Area[] = [];
let summaryGrades: SummaryGrade[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),

    }
    students.push(currentStudent);
    console.table(students)
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    }
    teachers.push(currentTeacher);
    console.table(teachers);
}

function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity"),
    }
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximun-gradebook")),
    }
    gradeBooksSetup.push(currentGradeBookSetup);
    console.table(gradeBooksSetup);
}

function addGrade(): void {
    let currentGrade: Grade = {
         gradeName:readFormHtml("grade-name"),
    }
    grades.push(currentGrade);
    console.table(grades);
    initSelect();
}

function addArea(): void {
    let currentArea: Area = {
         areaName:readFormHtml("area-name"),
    }
    areas.push(currentArea);
    console.table(areas);
    initSelect();
}

function addSummaryGrade(): void {
    let currentSummaryGrade: SummaryGrade = {
        studentName: readFormHtml("fullName"),
        teacher: readFormHtml("fullName-teacher"),
        grade: readFormHtml("grade-summary"),
        score: parseInt(readFormHtml("score-summary")),
    }
    summaryGrades.push(currentSummaryGrade);
    console.table(summaryGrades);
    initSelect();
}


function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}
function initSelect(): void {

    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    areas.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.areaName;
            option.text = value.areaName,
                area.add(option);
        }
    );
    let grade = document.getElementById("course-gradebook") as HTMLSelectElement;
    grades.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.gradeName;
            option.text = value.gradeName,
            grade.add(option);
        }
    );
    let activityGradebook = document.getElementById("activity-gradebook") as HTMLSelectElement;
   document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove())
    activities.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name,
                option.text = value.name,
                activityGradebook.add(option);
        }
    );
    let summaryGrade = document.getElementById("student-summary") as HTMLSelectElement;
    students.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName,
                option.text = value.fullName,
                summaryGrade.add(option);
        }
    );
}


initSelect();