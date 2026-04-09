import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class YouTubeChannel implements Subject {
  private observers: Observer[] = [];

  private latestVideo: string = "";

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.latestVideo);
    }
  }

  postVideo(title: string) {
    this.latestVideo = title;

    this.notify();
  }
}
