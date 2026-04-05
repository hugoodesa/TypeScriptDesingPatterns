import { DbConnection } from "./singleton";

const connectionDb = DbConnection.getInstance("localhost", 5432);
connectionDb.connectDb();

const connectionDbNew = DbConnection.getInstance("localhost", 5432);
connectionDbNew.connectDb();
