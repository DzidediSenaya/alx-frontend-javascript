// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 20,
  location: "Los Angeles",
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript, render a table and append a new row for each element in the array
document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  // Create header row
  const headerRow = document.createElement("tr");
  const header1 = document.createElement("th");
  header1.textContent = "First Name";
  const header2 = document.createElement("th");
  header2.textContent = "Location";
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  tableBody.appendChild(headerRow);

  // Create rows for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = student.firstName;
    const cell2 = document.createElement("td");
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
});
