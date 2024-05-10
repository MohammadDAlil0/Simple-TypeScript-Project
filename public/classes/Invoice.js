export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    ;
    format() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
