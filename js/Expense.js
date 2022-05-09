class Expense extends Data {
  static counter = 0;

  constructor(description, value) {
    super(description, value);
    this._id = ++Expense.counter;
  }

  get id() {
    return this._id;
  }
}
