import { Subscriber } from "./Subscriber";
import { YouTubeChannel } from "./YoutubeChannel";

const channel = new YouTubeChannel();

const hugo = new Subscriber("Hugo");
const maria = new Subscriber("Maria");

channel.subscribe(hugo);
channel.subscribe(maria);

channel.postVideo("Observer Pattern in TypeScript");
