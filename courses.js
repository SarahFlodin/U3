"use strict"
let courses = DATABASE.courses;
// Skapar en funktion för att i vår box ska det synas kurser, lärare och responsible samt resp divar till dem.
function viewCourse(id) {

    let div = document.createElement("div");
    let courses = DATABASE.courses[id];
    
    div.innerHTML = 
    `<div class = "box">
        <header>${courses.title} (Total Credits: ${courses.totalCredits})</header>
        <div id = "courses">
            <h3>Course responsible:</h3>
            <div id="coursesResponsible">
                ${viewResponsible(courses)}   
            </div>

            <h3>Teachers:</h3>
            <div id="coursesTeacher">
                ${viewTeachers(courses)}
            </div>

            <h3>Students:</h3>
            <div id="coursesStudents">
                ${viewStudents(courses)}
                </div>
        </div>
    </div>`


    return div;
}
// Skapar en fuktion som gör att vi hämtar kurser
function viewCourses (courses) {
    let coursesElement = document.getElementById("courses");
        for (let course of courses) {
            let courseElement = viewCourse(course.courseId);
            coursesElement.appendChild(courseElement)
        }
}
// Skapar en funktion som hämtar resposible för resp kurs
function viewResponsible(courses){
    let teacherBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement("div");
        if (DATABASE.teachers[i].teacherId == courses.courseResponsible){
            let text = div.innerHTML =
            `<h2 class= border>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post}) </h2>`
            teacherBox.push(text);
        }
    }
    return teacherBox.toString().split(",").join("");
}
// Skapar en fuktion som hämtar lärarna för resp kurs
function viewTeachers(courses) {
    let teacherBox = [];
    for (let i = 0; i < DATABASE.teachers.length; i++) {
        let div = document.createElement("div");

        if (DATABASE.teachers[i].teacherId == courses.teachers[0]) {
            let text = div.innerHTML = `
            <h6 class= border>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post}) </h6>`
            teacherBox.push(text);
        } else if (DATABASE.teachers[i].teacherId == courses.teachers[1]) {
            let text = div.innerHTML = `
            <h6 class= border>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post}) </h6>`
            teacherBox.push(text);
        } else if (DATABASE.teachers[i].teacherId == courses.teachers[2]) {
            let text = div.innerHTML = `
            <h6 class= border>${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post}) </h6>`
            teacherBox.push(text);
        }
    }
    return teacherBox.toString().split(",").join("");
}
// Skapar en fuktion som hämtar studenterna för resp kurs och deras information
function viewStudents(courses) {
    let studentBox = [];
    for (let i = 0; i < DATABASE.students.length; i++) {
        let div = document.createElement("div");
        for (let x = 0; x < DATABASE.students[i].courses.length; x++) {
            if (DATABASE.students[i].courses[x].courseId == courses.courseId && DATABASE.students[i].courses[x].passedCredits == courses.totalCredits) {
                let studentInfo = div.innerHTML = 
                `<div class= "done">
                <h5>
                ${DATABASE.students[i].lastName}

                (${DATABASE.students[i].courses[x].passedCredits}credits)
                </h5>
                <h5>
                ${DATABASE.students[i].courses[x].started.semester}
                ${DATABASE.students[i].courses[x].started.year}
                </h5>
                </div>`
                studentBox.push(studentInfo);
                } else if (DATABASE.students[i].courses[x].courseId == courses.courseId) {
                    let studentInfo = div.innerHTML = 
                    `<div class= "notDone">
                    <h5>
                    ${DATABASE.students[i].lastName}

                    (${DATABASE.students[i].courses[x].passedCredits}credits)
                    </h5>
                    <h5>
                    ${DATABASE.students[i].courses[x].started.semester}
                    ${DATABASE.students[i].courses[x].started.year}
                    </h5>
                    </div>`
                    studentBox.push(studentInfo);
                }
            }
        }
        return studentBox.toString().split(",").join("");
    }
// Skapar en funktion som kallar på sökning av kursen 
function searchCourse () {
        return input.value.toLowerCase();
}

    let input = document.getElementById("course-form");
        input.addEventListener("keyup", courseSearch);
// Skapar en sökfunktion så vi kan söka på kursers titel
function courseSearch () {
    let coursesArray = []
    for (let i = 0; i < courses.length; i++) {
        document.getElementById("courses").innerHTML = ""
        if ("" == searchCourse()){
            document.getElementById("courses").innerHTML = ""
        } else if (courses[i].title.toLowerCase().includes(searchCourse())){
            coursesArray.push(courses[i]);
        }
    }
    viewCourses(coursesArray)
}

 viewCourses(DATABASE.courses);

// Skapar en funktion som kollar om vi har något booleanskt värde att hämta från local-storage
function checkDarkMode () {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode == null) {
    localStorage.setItem("darkMode", JSON.stringify(false));
 }
    let element = document.body;

    if (JSON.parse(darkMode)== true) {
        element.classList.add("darkMode")
    } else {
        element.classList.remove("darkMode");
    }
}
// Skapar en funktion som sparar ett booleanskt värde till local-storage
function darkMode() {
    let element = document.body;
    const darkMode = localStorage.getItem("darkMode")
    element.classList.toggle("darkMode");

    if (JSON.parse(darkMode) == true) {
        element.classList.remove("darkMode");
        localStorage.setItem("darkMode", JSON.stringify(false));
    } 
    else if (JSON.parse(darkMode) == false) {
        element.classList.add("darkMode");
        localStorage.setItem("darkMode", JSON.stringify(true));
    }
}  
// Varje gång sidan laddas om så kollar den om darkMode är true/false
window.onload = (event) => {
    checkDarkMode();
  };
// Roligt klickevent 
function clickedLava(){
    alert("Website is Lava, you got burned");
    document.body.style.backgroundImage = ("url('lava.jpg')");
};    