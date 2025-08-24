import { BaseEmployee } from "./Employee";

interface IEmployeeActions {
    work(): void;
}

export class Intern extends BaseEmployee implements IEmployeeActions {
    constructor(firstName: string, lastName: string, public stipend: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.stipend;
    }

    work(): void {
        console.log(`${this.firstName} is working as an intern.`);
    }
}
