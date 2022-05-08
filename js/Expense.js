class Expense extends Data {
  static counter = 0;

  constructor(description, value) {
    super(description, value);
    thid._id = ++Expense.counter;
  }

  get id() {
    this._id;
  }
}
