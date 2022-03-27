"use strict"
//Skapar en global variebel för databasen
let students = DATABASE.students;

function viewStudent(id) {
    //Skapar en funktion för att skapa en div med en classen container
    let div = document.createElement("div");
    let student = DATABASE.students[id];
    div.classList = "container";
    //innehåller students förnamn, efternamn och deras totala credits. Samt titel för infon courses + en div
    div.innerHTML = `
    <header>${student.firstName} ${student.lastName} (Total Credits: ${totalCredits(student)})</header>
    <div>
        <div id = "course">
            <h4>Courses:</h4>
            <div id="courses">
                ${viewCourses(student)}
                </div>
            </div>
        </div>`

    //returnerar den nya diven
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

function viewStudents(students){
    let studentsElement = document.getElementById("students");
    for (let student of students) {
        let studentElement = viewStudent(student.studentID);
        studentsElement.appendChild(studentElement);
    }
}

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
    return courseForm.toString().split(",").join("");
}

viewStudents(DATABASE.students);

function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
  } 