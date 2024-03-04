export default function createIteratorObject(report) {
 const departments = Object.keys(report);  // Get a list of department names
 const employees = Object.values(report);  // Get a list of employee arrays (one for each department)

 let currentDepartment = 0;  // Track the current department index
 let currentEmployee = 0;   // Track the current employee index within a department

 return {
   next() {
     // Check if we've reached the end of all employees
     if (currentDepartment >= departments.length || currentEmployee >= employees[currentDepartment].length) {
       return { done: true };
     }

     // Get the current employee's name
     const employee = employees[currentDepartment][currentEmployee];

     // Move to the next employee in the current department, or to the next department
     currentEmployee++;
     if (currentEmployee >= employees[currentDepartment].length) {
       currentDepartment++;
       currentEmployee = 0;
     }

     return { value: employee, done: false };
   }
 };
}

