'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let endString = '';
    let sep = separator;

    if (this.length === 0) { // умова для пустого масива
      return endString;
    }

    if (this.length === 1) { // умова для масива довж 1
      endString += this[0];

      return endString;
    }

    if (separator === undefined) {
      sep = ',';
    }

    if (this.length > 0) { // умова для масива довж > 0
      for (let el = 0; el < this.length - 1; el++) {
        if (this[el] === null || this[el] === undefined) {
          this[el] = '';
        }
        endString += this[el];
        endString += sep;
      }
    }

    endString += this[this.length - 1];// додаємо останній ел

    return endString;
  };
}

module.exports = applyCustomJoin;
