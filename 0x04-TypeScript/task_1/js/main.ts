// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Function to print teachers
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher function
console.log(printTeacher('John', 'Doe'));

// Class StudentClass and its interfaces
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

// Example usage of StudentClass
const studentInstance = new StudentClass('Alice', 'Smith');
console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName()); // Output: Alice
