import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
    constructor(
        private client: string,
        private details: string,
        private amount: number) {
    }

    setClient(client: string): void {
        this.client = client;
    }
    getClient() {
        return this.client;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }
    getAmount() {
        return this.amount;
    }

    getDetails() {
        return this.details;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}