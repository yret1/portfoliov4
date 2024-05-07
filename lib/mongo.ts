import { MongoClient, ServerApiVersion } from "mongodb";

export let clientPromise : any = null;

export async function connectToMongoDB() {

  if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
  }

  if (clientPromise !== null) {
    console.log("Using existing MongoDB connection")
    return clientPromise;
  }else {

    const client = new MongoClient(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });


    clientPromise = client.connect();

    console.log("Created new MongoDB connection");

    return clientPromise;
  }

}
