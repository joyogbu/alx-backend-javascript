export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.method !== Building.prototype.method) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
