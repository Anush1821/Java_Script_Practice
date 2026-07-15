// Store all students
let students = [];
let editIndex = -1;

// Get HTML elements
const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const languageInput = document.getElementById("language");
const studentList = document.getElementById("studentList");

// Form Submit
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Create Student Object
    const newStudent = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
        language: languageInput.value
    };

    // Store object in array
    if( editIndex !== -1) {
        students[editIndex] = newStudent;
        editIndex = -1;
    } else {
        students.push(newStudent);
    }

    // Display all students
    renderStudents();

    // Clear input fields
    nameInput.value = "";
    ageInput.value = "";
    
    languageInput.value = "";

    // Focus on first input
    nameInput.focus();
});


// Function to display students
function renderStudents() {

    // Clear old list
    studentList.innerHTML = "";

    // Display each student
    students.forEach(function (student,index) {

        const li = document.createElement("li");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
      

         editButton.addEventListener("click", function() {
            nameInput.value = student.name;
            ageInput.value = student.age;
            languageInput.value = student.language; 
            editIndex = index;
         });



        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(){
            students = students.filter(function(s, i) {
                return i !== index;
            });
            renderStudents();
        });

        li.textContent =
            `${student.name} - ${student.age} - ${student.language}`;

        li.appendChild(editButton);
        li.appendChild(deleteButton);
li.appendChild(button);
        studentList.appendChild(li);
    });
}




