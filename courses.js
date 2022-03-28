"use strict"
let courses = DATABASE.courses;
let teachers = DATABASE.teachers;

function viewCourses(id) {
    //Skapar en funktion för att skapa en div med en classen container
    let div = document.createElement("div");
    let course = DATABASE.courses[id];
    div.classList = "container";
    //innehåller kursens namn och deras totala credits. Samt titel för infon courses + en div
    div.innerHTML = `
    <header>${courses.title} (Total Credits: ${courses.totalCredits()})</header>
    <div>
        <div id = "wrapp">
            <h4>Course responsible:</h4>
            <div id="coursesResponsible">
                ${viewResponsible(courses)}   
            </div>
            <h4>Teachers:</h4>
            <div id="coursesTeacher">
                ${viewTeacher(courses)}
            </div>
            <h4>Students:</h4>
            <div id="coursesStudents">
                ${viewStudents(courses)}
                </div>
        </div>
    </div>`

    //returnerar den nya diven
    return div;
}

function viewResponsible(courses){
    let viewResponsible = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement("div");
        if (DATABASE.teachers[i].teacherId == courses.coureseResponsible){
            let text = div.innerHTML =
            `<div><h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4></div>`
            viewResponsible.push(text);
        }
    }
    return viewResponsible.toString().split(",").join("");
}