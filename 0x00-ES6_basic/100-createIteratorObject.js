export default function createIteratorObject(report) {
    const departments = Object.keys(report.allEmployees);
    let currentDeptIndex = 0;
    let currentEmployeeIndex = 0;
  
    return {
      next() {
        if (currentDeptIndex >= departments.length) {
          return { done: true };
        }
  
        const department = departments[currentDeptIndex];
        const employees = report.allEmployees[department];
  
        if (currentEmployeeIndex >= employees.length) {
          currentDeptIndex += 1;
          currentEmployeeIndex = 0;
          return this.next();
        }
  
        const employee = employees[currentEmployeeIndex];
        currentEmployeeIndex += 1;
  
        return { value: employee, done: false };
      },
    };
  }