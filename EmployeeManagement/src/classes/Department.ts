import { BaseEmployee } from "./Employee";

export class Department {
    private _employees: BaseEmployee[] = [];

    addEmployee(emp: BaseEmployee) {
        this._employees.push(emp);
    }

    printSalaries() {
        this._employees.forEach((emp) => {
            console.log(`${emp.firstName} $${emp.getSalary}`);
        });
    }
}
