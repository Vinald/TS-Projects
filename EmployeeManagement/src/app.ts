import { Department } from "./classes/Department.js";
import { Intern } from "./classes/EmployeeActions.js";
import { FullTimeEmployee, PartTimeEmployee } from "./classes/Employee.js";

const dept = new Department();
dept.addEmployee(new FullTimeEmployee("Alice", "Smith", 60000));
dept.addEmployee(new PartTimeEmployee("Bob", "Brown", 30, 80));
dept.addEmployee(new Intern("Charlie", "Davis", 1000));
dept.printSalaries();
