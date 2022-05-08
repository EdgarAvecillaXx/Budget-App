class Data {
  constructor(description, value) {
    this._description = description;
    this._value = value;
  }

  get description() {
    this._description;
  }
  set description(description) {
    this._description = description;
  }

  get value() {
    this._value;
  }
  set value(value) {
    this._value = value;
  }
}
