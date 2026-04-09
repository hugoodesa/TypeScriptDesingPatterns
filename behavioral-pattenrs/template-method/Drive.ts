export type Vehicle = {
  type: "motorcycle" | "car";
};

export abstract class Drive {
  constructor(public veihcle: Vehicle) {}

  drive() {
    const securityVehicle = this.security();
    console.log("To handle this vehicle you should to" + securityVehicle);

    const passangerCapacity = this.passangerCapacity();
    console.log("The driver capacity is" + passangerCapacity);
  }

  abstract security(): string;
  abstract passangerCapacity(): number;
}
