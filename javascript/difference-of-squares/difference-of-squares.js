//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this.input = n;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.input; i++) {
      sum += Math.pow(i, 2);
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.input; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
