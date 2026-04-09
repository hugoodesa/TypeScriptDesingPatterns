import { Observer } from "./Observer";

export class Subscriber implements Observer {
  constructor(private name: string) {}

  update(videoTitle: string): void {
    console.log(`${this.name} received notification: ${videoTitle}`);
  }
}
