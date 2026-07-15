// Store all students
let students = [];
let editIndex = -1;

// Get HTML elements
const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const languageInput = document.getElementById("language");
const studentList = document.getElementById("studentList");
const searchInput = document.getElementById("search");

// Form Submit
form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Validation
    if (
        nameInput.value.trim() === "" ||
        ageInput.value.trim() === "" ||
        languageInput.value.trim() === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const newStudent = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
        language: languageInput.value
    };

    if (editIndex !== -1) {
        students[editIndex] = newStudent;
        editIndex = -1;
    } else {
        students.push(newStudent);
    }

    renderStudents();

    nameInput.value = "";
    ageInput.value = "";
    languageInput.value = "";

    nameInput.focus();
});

// Search Student
searchInput.addEventListener("input", function () {
    renderStudents();
});

// Display Students
function renderStudents() {

    studentList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchText);
    });

    filteredStudents.forEach(function (student) {

        // Get original index
        const originalIndex = students.findIndex(function (s) {
            return (
                s.name === student.name &&
                s.age === student.age &&
                s.language === student.language
            );
        });

        const li = document.createElement("li");

        li.textContent =
            `${student.name} - ${student.age} - ${student.language}`;

        // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function () {

            nameInput.value = student.name;
            ageInput.value = student.age;
            languageInput.value = student.language;

            editIndex = originalIndex;
        });

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {

            students = students.filter(function (s, i) {
                return i !== originalIndex;
            });

            renderStudents();
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        studentList.appendChild(li);
    });
}