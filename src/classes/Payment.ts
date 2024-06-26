import {HasFormatter} from '../Interfaces/HasFormatter';

export class Payment implements HasFormatter{
    readonly recipient: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    };
    format() {
        return `${this.recipient} owns $${this.amount} for ${this.details}`;
    }
}