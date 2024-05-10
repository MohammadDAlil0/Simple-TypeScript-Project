import {HasFormatter} from '../Interfaces/HasFormatter';

export class Invoice implements HasFormatter{
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    };
    format() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}