"use strict"
//Skapar en global variebel för databasen
let students = DATABASE.students;

function viewStrudent(id) {
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
            <div id= "courses">
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