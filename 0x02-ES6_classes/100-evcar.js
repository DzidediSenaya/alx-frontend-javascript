import Car from './10-car';

const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clonedCar = this[cloneSymbol](); // Call the cloneSymbol method
    return clonedCar;
  }

  [cloneSymbol]() {
    const clonedCar = new Car(); // Create a Car instance instead of EVCar
    Object.getOwnPropertyNames(this).forEach((prop) => {
      clonedCar[prop] = this[prop];
    });
    return clonedCar;
  }
}
