"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ref {
    constructor({ num, gen }) {
        this.num = num;
        this.gen = gen;
    }
    toString() {
        let str = `${this.num}R`;
        if (this.gen !== 0) {
            str += this.gen;
        }
        return str;
    }
}
exports.default = Ref;
