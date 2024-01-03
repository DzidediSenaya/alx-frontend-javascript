export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  function* employeeIterator() {
    for (const department in employees) {
      const departmentEmployees = employees[department];
      for (const employee of departmentEmployees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}

