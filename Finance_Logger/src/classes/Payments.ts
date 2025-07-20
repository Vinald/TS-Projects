import { HasFormatter } from "../interfaces/HasFormatter";

export class Payments implements HasFormatter {
    constructor(
        private recipient: string,
        private details: string,
        private amount: number) {
    }

    setClient(client: string): void {
        this.recipient = client;
    }
    getClient() {
        return this.recipient;
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
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}