"use strict"
let courses = DATABASE.courses;
let teachers = DATABASE.teachers;

function viewCourses(id) {
    //Skapar en funktion för att skapa en div med en classen container
    let div = document.createElement("div");
    let courses = DATABASE.courses[id];
    div.classList = "results";
    //innehåller kursens namn och deras totala credits. Samt titel för infon courses + en div
    div.innerHTML = 
    `<header>${courses.title} (Total Credits: ${courses.totalCredits()})</header>
    <div>
        <div id = "courses">
            <h3>Course responsible:</h3>
            <div id="coursesResponsible">
                ${viewResponsible(courses)}   
            </div>

            <h3>Teachers:</h3>
            <div id="coursesTeacher">
                ${viewTeacher(courses)}
            </div>

            <h3>Students:</h3>
            <div id="coursesStudents">
                ${viewStudents(courses)}
                </div>
        </div>
    </div>`

    //returnerar den nya diven
    return div;
}

function viewCourses (courses) {
    let coursesElement = document.getElementById("courses");
        for (let course of courses) {
            let courseElement = showCourse(course.courseId);
            coursesElement.appendChild(courseElement)
        }
}

function viewResponsible(courses){
    let teacherBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement("div");
        if (DATABASE.teachers[i].teacherId == courses.coureseResponsible){
            let text = div.innerHTML =
            `<h2>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post}) </h2>`
            teacherBox.push(text);
        }
    }
    return teacherBox.toString().split(",").join("");
}

function viewTeachers(courses) {
    let teacherBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement("div");
        if (DATABASE.teachers[i].teacherId == courses.teachers[0]) {
            let text = div.innerHTML `
            <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4>`
            teacherBox.push(text);
        } else if (DATABASE.teachers[i].teacherId == courses.teachers[1]) {
            let text = div.innerHTML `
            <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4>`
            teacherBox.push(text);
        } else if (DATABASE.teachers[i].teacherId == courses.teachers[2]) {
            let text = div.innerHTML `
            <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4>`
            teacherBox.push(text);
        }
    }
    return teacherBox.toString().split(",").join("");
}

function getStudents(courses) {
    let studentBox = [];
    for (let i = 0; i < DATABASE.students.length; i++) {
        let div = document.createElement("div");
        for (let x = 0; x < DATABASE.students[i].courses.length; x++) {
            if (DATABASE.students[i].courses[x].courseId == courses.coursId && DATABASE.students[i].courses[x].passedCredits == courses.totalCredits) {
                let studentInfo = div.innerHTML = 
                `<div class= "done">
                <h5>
                ${DATABASE.studetens[i].lastName}

                (${DATABASE.students[i].courses[x].passedCredits}credits)
                
                ${DATABASE.studetents[i].courses[x].started.semester}
                ${DATABASE.studetents[i].courses[x].started.year}`
            }
            
        }
        
    }
}