class SumApp {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }
  reset() {
    this.numbers = [];
  }
  getSum() {
    let initialValue = 0;
    return this.numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  }
}
