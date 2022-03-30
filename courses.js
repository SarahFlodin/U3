"use strict"
let courses = DATABASE.courses;

function viewCourse(id) {
    //Skapar en funktion för att skapa en div med en classen container
    let div = document.createElement("div");
    let courses = DATABASE.courses[id];
    //innehåller kursens namn och deras totala credits. Samt titel för infon courses + en div
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

    //returnerar den nya diven
    return div;
}

function viewCourses (courses) {
    let coursesElement = document.getElementById("courses");
        for (let course of courses) {
            let courseElement = viewCourse(course.courseId);
            coursesElement.appendChild(courseElement)
        }
}

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

    function searchCourse () {
        return input.value.toLowerCase();
    }

    let input = document.getElementById("course-form");
        input.addEventListener("keyup", courseSearch);

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

function submit () {
    let coursesArray = []
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].courses.toLowerCase().includes(searchCourse)) {
            coursesArray.push(sourses[i]);
        }
    }
    viewCourses(coursesArray)
}
 input.addEventListener("submit", submit);

 viewCourses(DATABASE.courses);


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

window.onload = (event) => {
    checkDarkMode();
  };

function clickedLava(){
    alert("Website is Lava");
    document.body.style.backgroundImage = ("url('lava.jpg')");
};   