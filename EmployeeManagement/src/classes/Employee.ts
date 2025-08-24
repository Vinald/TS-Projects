export abstract class BaseEmployee {
    constructor(public firstName: string, public lastName: string) {}

    abstract getSalary(): number;
}

export class FullTimeEmployee extends BaseEmployee {
    constructor(firstName: string, lastName: string, public salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary;
    }
}

export class PartTimeEmployee extends BaseEmployee {
    constructor(
        firstName: string,
        lastName: string,
        public hourlyRate: number,
        public hours: number
    ) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.hourlyRate * this.hours;
    }
}
