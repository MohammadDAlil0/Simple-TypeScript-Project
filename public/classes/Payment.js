export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    ;
    format() {
        return `${this.recipient} owns $${this.amount} for ${this.details}`;
    }
}
