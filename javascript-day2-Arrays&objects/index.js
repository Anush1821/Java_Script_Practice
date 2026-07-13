// Store all students
const students = [];

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
    students.push(newStudent);

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
    students.forEach(function (student) {

        const li = document.createElement("li");

        li.textContent =
            `${student.name} - ${student.age} - ${student.language}`;

        studentList.appendChild(li);
    });
}


// ----------------------------
// map() Practice
// ----------------------------

const numbers = [2, 4, 6];

const result = numbers.map(function (num) {
    return num + 5;
});

console.log(result);

// Output: [7, 9, 11]


const studentNames = students.map(function (student) {
    return student.name;
});

console.log(studentNames);