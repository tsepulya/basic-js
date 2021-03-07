const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    (value !== undefined) ? this.chain.push(`( ${value} )`): this.chain.push(`( )`);
    return this;
  },

  removeLink(position) {
    if (typeof position === "number" && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error();
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
