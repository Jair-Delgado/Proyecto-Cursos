"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let gradeBooksSetup = [];
let grades = [];
let areas = [];
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximun-gradebook")),
    };
    gradeBooksSetup.push(currentGradeBookSetup);
    console.table(gradeBooksSetup);
}
function addGrade() {
    let currentGrade = {
        gradeName: readFormHtml("grade-name"),
    };
    grades.push(currentGrade);
    console.table(grades);
    initSelect();
}
function addArea() {
    let currentArea = {
        areaName: readFormHtml("area-name"),
    };
    areas.push(currentArea);
    console.table(areas);
    initSelect();
}
function readFormHtml(id) {
    return document.getElementById(id).value;
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.areaName;
        option.text = value.areaName,
            area.add(option);
    });
    let grade = document.getElementById("course-gradebook");
    grades.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.gradeName;
        option.text = value.gradeName,
            grade.add(option);
    });
    let activityGradebook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activities.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name,
            option.text = value.name,
            activityGradebook.add(option);
    });
}
initSelect();
