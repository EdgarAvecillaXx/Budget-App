class Income extends Data {
  static counter = 0;

  constructor(description, value) {
    super(description, value);
    this._id = ++Income.counter;
  }

  get id() {
    this._id;
  }
}
