"use strict"
//Skapar en global variebel för databasen
let students = DATABASE.students;

function viewStrudent(id) {
    //Skapar en funktion för att skapa en div med en classen container
    let div = document.createElement("div");
    let student = DATABASE.students[id];
    div.classList = "container";
    div.innerHTML = ´
    <header>${student.firstName} ${student.lastName} (Total Credits: ${totalCredits(student)})</header>
    <div>
        <div id = "course">
            <h4>Courses:</h4>
            <div id= "courses">
                ${viewCourses(student)}
                </div>
            </div>
        </div>`
    
}
