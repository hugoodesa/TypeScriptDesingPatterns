import { CarState } from "./CarState";

const car = new CarState();

car.getState().acelerate();
console.log(car.getState().acelerate());

console.log(car.getState().turnOffEngine());
