export class DbConnection {
  private static instance: null | DbConnection = null;

  private constructor(
    private url: string,
    private port: number,
  ) {}

  static getInstance(url: string, port: number): DbConnection {
    if (this.instance == null) {
      this.instance = new DbConnection(url, port);
      return this.instance;
    }

    console.log("Reutilizing same instance");
    return this.instance;
  }

  connectDb(): boolean {
    console.log(`connecting to db ${this.url}:${this.port}`);
    return true;
  }
}
