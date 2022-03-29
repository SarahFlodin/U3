// "use strict"
// let courses = DATABASE.courses;

// function viewCourse(id) {
//     //Skapar en funktion för att skapa en div med en classen container
//     let div = document.createElement("div");
//     let courses = DATABASE.courses[id];
//     div.classList = "courses";
//     //innehåller kursens namn och deras totala credits. Samt titel för infon courses + en div
//     div.innerHTML = 
//     `<header>${courses.title} (Total Credits: ${courses.totalCredits})</header>
//     <div>
//         <div id = "courses">
//             <h3>Course responsible:</h3>
//             <div id="coursesResponsible">
//                 ${viewResponsible(courses)}   
//             </div>

//             <h3>Teachers:</h3>
//             <div id="coursesTeacher">
//                 ${viewTeachers(courses)}
//             </div>

//             <h3>Students:</h3>
//             <div id="coursesStudents">
//                 ${viewStudents(courses)}
//                 </div>
//         </div>
//     </div>`

//     //returnerar den nya diven
//     return div;
// }

// function viewCourses (courses) {
//     let coursesElement = document.getElementById("courses");
//         for (let course of courses) {
//             let courseElement = viewCourse(course.courseId);
//             coursesElement.appendChild(courseElement)
//         }
// }

// function viewResponsible(courses){
//     let teacherBox = [];
//     for (let i = 0; i < DATABASE.teachers.length; i++) {
//         let div = document.createElement("div");
//         if (DATABASE.teachers[i].teacherId == courses.coureseResponsible){
//             let text = div.innerHTML =
//             `<h2>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post}) </h2>`
//             teacherBox.push(text);
//         }
//     }
//     return teacherBox.toString().split(",").join("");
// }

// function viewTeachers(courses) {
//     let teacherBox = [];
//     for (let i = 0; i < DATABASE.teachers.length; i++) {
//         let div = document.createElement("div");

//         if (DATABASE.teachers[i].teacherId == courses.teachers[0]) {
//             let text = div.innerHTML `
//             <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4>`
//             teacherBox.push(text);
//         } else if (DATABASE.teachers[i].teacherId == courses.teachers[1]) {
//             let text = div.innerHTML `
//             <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4>`
//             teacherBox.push(text);
//         } else if (DATABASE.teachers[i].teacherId == courses.teachers[2]) {
//             let text = div.innerHTML `
//             <h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} </h4>`
//             teacherBox.push(text);
//         }
//     }
//     return teacherBox.toString().split(",").join("");
// }

// function viewStudents(courses) {
//     let studentBox = [];
//     for (let i = 0; i < DATABASE.students.length; i++) {
//         let div = document.createElement("div");
//         for (let x = 0; x < DATABASE.students[i].courses.length; x++) {
//             if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits == courses.totalCredits) {
//                 let studentInfo = div.innerHTML = 
//                 `<div class= "done">
//                 <h5>
//                 ${DATABASE.students[i].lastName}

//                 (${DATABASE.students[i].courses[x].passedCredits}credits)
                
//                 ${DATABASE.students[i].courses[x].started.semester}
//                 ${DATABASE.students[i].courses[x].started.year}
//                 </h5>
//                 </div>`
//                 studentBox.push(studentInfo);
//                 } else if (DATABASE.students[i].courses[x].courseId == courses.courseId) {
//                     let studentInfo = div.innerHTML = 
//                     `<div class= "notDone">
//                     <h5>
//                     ${DATABASE.students[i].lastName}

//                     (${DATABASE.students[i].courses[x].passedCredits}credits)
                    
//                     ${DATABASE.students[i].courses[x].started.semester}
//                     ${DATABASE.students[i].courses[x].started.year}
//                     </h5>
//                     </div>`
//                     studentBox.push(studentInfo);
//                 }
//             }
//         }
//         return studentBox.toString().split(",").join("");
//     }

//     function searchCourse () {
//         return input.value.toLowerCase();
//     }

//     let input = document.getElementById("course-form");
//         input.addEventListener("keyup", courseSearch);

//     function courseSearch () {
//         let coursesArray = []
//         for (let i = 0; i < courses.length; i++) {
//             document.getElementById("courses").innerHTML = ""
//             if ("" == searchCourse()){
//                 document.getElementById("courses").innerHTML = ""
//             } else if (courses[i].title.toLowerCase().includes(searchCourse())){
//                 coursesArray.push(courses[i]);
//             }
//         }
//         viewCourses(coursesArray)
// }

// function submit () {
//     let coursesArray = []
//     for (let i = 0; i < courses.length; i++) {
//         if (courses[i].courses.toLowerCase().includes(searchCourse)) {
//             coursesArray.push(sourses[i]);
//         }
//     }
//     viewCourses(coursesArray)
// }
//  input.addEventListener("submit", submit);

//  viewCourses(DATABASE.courses);

"use strict";

let courses = DATABASE.courses;
let teachers = DATABASE.teachers;

function renderCourse(id) {
    let div = document.createElement("div");
    let courses = DATABASE.courses[id];
    div.classList = "container";
    div.innerHTML = `
    <header> ${courses.title} (total credits: ${courses.totalCredits}</header>
    <div>
        <div class="box">
            <div class=resp-box><h3>Course responsible: </h3>
            <div class="responsible"> 
                ${findResponsible(courses)}
            </div></div>
            <div class="teacher-box"><h3>Teachers: </h3>
            <div class="teachers"> 
                ${findTeachers(courses)}
            </div></div>
            <div class=student-box"><h3>Students: </h3>
            <div class="students">
                ${findStudents(courses)}
            </div></div>
        </div>`

    return div;
}

function findResponsible(courses){
    let responsibleTeacher = [];
    for (let i = 0; i < DATABASE.teachers.length; i++){
       let div = document.createElement("div");
       if (DATABASE.teachers[i].teacherId == courses.courseResponsible) {
           let text = div.innerHTML = 
           <div><h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${teachers[i].post})</h4></div>
           responsibleTeacher.push(text);
       } 
   }
   return responsibleTeacher.toString().split(",").join("");
}

function findTeachers(courses) {
    let teacherBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement("div")
        if (DATABASE.teachers[i].teacherId == courses.teachers[0]) {
            let text = div.innerHTML = `
            <div><h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${teachers[i].post})</h4></div>`
            teacherBox.push(text);
        } else if (DATABASE.teachers[i].teacherId == courses.teachers[1]) {
            let text = div.innerHTML = `
            <div><h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${teachers[i].post})</h4></div>`
            teacherBox.push(text);
        } else if (DATABASE.teachers[i].teacherId == courses.teachers[2]) {
            let text = div.innerHTML = `
            <div><h4>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${teachers[i].post})</h4></div>`
            teacherBox.push(text);
        } 
    }
    return teacherBox.toString().split(",").join("");
}

function findStudents(courses){
    let studentBox = [];
    for (let i = 0; i < DATABASE.students.length; i++){
        let div = document.createElement("div");
        for (let x = 0; x < DATABASE.students[i].courses.length; x++){
            if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits == courses.totalCredits){
                let text = div.innerHTML = `
                <div class="done"><h4>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} (${DATABASE.students[i].courses[x].passedCredits} Credits)</h4>
                <p>${DATABASE.students[i].courses[x].started.semester} ${DATABASE.students[i].courses[x].started.year}</p></div>`
                studentBox.push(text);
            } else if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits < courses.totalCredits){
                let text = div.innerHTML = `
                <div class="not-done"><h4>${DATABASE.students[i].firstName} ${DATABASE.students[i].lastName} (${DATABASE.students[i].courses[x].passedCredits} Credits)</h4>
                <p>${DATABASE.students[i].courses[x].started.semester} ${DATABASE.students[i].courses[x].started.year}</p></div>`
                studentBox.push(text);
            }
        }
    }
    return studentBox.toString().split(",").join("");
}

function renderCourses(courses){
    let coursesElement = document.getElementById("courses");
    for (let course of courses){
        let courseElement = renderCourse(course.courseId);
        coursesElement.appendChild(courseElement);
    }
}



function searchCourseTitle() {
    return input.value.toLowerCase();
}

let input = document.getElementById("course-form");
input.addEventListener("keyup", courseTitle);

function courseTitle (){
    let courseArray = [];
    for ( let i = 0; i < courses.length; i++){
        document.getElementById("courses").innerHTML = "";
        if ("" == searchCourseTitle()){
            document.getElementById("courses").innerHTML = "";
        } else if (courses[i].title.toLowerCase().includes(searchCourseTitle())) {
            courseArray.push(courses[i]);
        } 

    }

    renderCourses(courseArray)
}

function submit () {
    let courseArray = []
    for ( let i = 0; i < courses.length; i++){
        if (courses[i].title.toLocaleLowerCase().includes(searchCourseTitle())) {
            courseArray.push(courses[i]);
        } 
    }

    renderCourses(courseArray)
}

input.addEventListener("submit", submit);


renderCourses(DATABASE.courses);