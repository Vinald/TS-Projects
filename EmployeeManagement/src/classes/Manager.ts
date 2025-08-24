class Employee {
    constructor(public firstName: string, public lastName: string) {}

    getFullName(): string {
        return `${this.firstName}, ${this.lastName}`;
    }
}

class Manager extends Employee {
    constructor(firstName: string, lastName: string, public department: string) {
        super(firstName, lastName);
    }

    getDetails(): string {
        return `${this.getFullName()} manages ${this.department}`;
    }
}
