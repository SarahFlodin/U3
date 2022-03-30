"use strict"
//Skapar en global variebel för databasen
let students = DATABASE.students;
// Skapar en funktion som skapar en box där vår student + credit samt resp kurser för studenten samt resp divar.
function viewStudent(id) {
    let div = document.createElement("div");
    let student = DATABASE.students[id];
    div.classList = "container";
    
    div.innerHTML = `
    <div class= "box">
    <header>${student.firstName} ${student.lastName} (Total Credits: ${totalCredits(student)})</header>
    
        <div id = "course">
            <h4>Courses:</h4>
            <div id="courses">
                ${viewCourses(student)}
                </div>
            </div>
        </div>`


    return div;
}

//Skapar en funktion för att filtrera ut studenternas totala "credits"
function totalCredits(student) {
    let credits = [];
    for (let course of student.courses){
        credits.push(course.passedCredits);
    }
    
    let creditTotal = 0;
    for (let i = 0; i < credits.length; i++) {
        creditTotal += credits[i];
    }

    return creditTotal;
}
// Skapar en funktion för att få ut studenter
function viewStudents(students){
    let studentsElement = document.getElementById("students");
    for (let student of students) {
        let studentElement = viewStudent(student.studentID);
        studentsElement.appendChild(studentElement);
    }
}
// Skapar en funktion för att se kurserna för resp student
function viewCourses(student){
    let courseInfo = DATABASE.courses;
    let courses = [];
    for (let i = 0; i < student.courses.length; i++) {
        let id = student.courses[i].courseId;
        courses.push(courseInfo[id]);
    }

    let courseForm = [];
    for (let i = 0; i < courses.length; i++) {
        let div = document.createElement("div");

        if (student.courses[i].passedCredits == courseInfo[courses[i].courseId].totalCredits){
            let info = div.innerHTML = `
                <div class="done"> 
                <h3>${courses[i].title}</h3>
                <p>${student.courses[i].started.semester}
                ${student.courses[i].started.year}
                (${student.courses[i].passesCredits} of 
                ${courseInfo[courses[i].courseId].totalCredits} credits)</p>
                </div>`
                courseForm.push(info); 
            } else {
                let info = div.innerHTML = `
                <div class="notDone">
                <h3> ${courses[i].title} </h3>
                <p>${student.courses[i].started.semester}
            ${student.courses[i].started.year}
            (${student.courses[i].passedCredits} of 
            ${courseInfo[courses[i].courseId].totalCredits} credits)</p>
                </div>`
        
            courseForm.push(info);
        }
    }
    return courseForm.toString().split(",").join(" ");
}

//Kallar på funktionen searchByLastname
function searchByLastname() {
    return input.value.toLowerCase();
}

let input = document.getElementById("search-student");
input.addEventListener("keyup",studentsLastname);

//Skapar en funktion för sökningen av studeternas efternamn
function studentsLastname (){
    let studentsArray = [];
    for (let i = 0; i < students.length; i++) {
         document.getElementById("students").innerHTML = "";
         if( "" == searchByLastname()){
             document.getElementById("students").innerHTML = "";
         }  else if (students[i].lastName.toLowerCase().includes(searchByLastname())) {
             studentsArray.push(students[i]);
         }
        
    }
    viewStudents(studentsArray)
}

viewStudents(DATABASE.students);

// Skapar en funktion som kollar om det finns någon boolean från darkMode att hämta
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
//Skapar en funktion som sparar ett booleanskt värde under local-storage
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
// Varje gång sidan laddas om kallar vi på funktionen checkDarkMode
window.onload = (event) => {
    checkDarkMode();
  };
//En rolig Lavafunktion
function clickedLava(){
    alert("Website is Lava, you got burned");
    document.body.style.backgroundImage = ("url('lava.jpg')");
};   