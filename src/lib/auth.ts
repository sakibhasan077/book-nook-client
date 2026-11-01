import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
const URI = process.env.MONGODB_URI;
if(!URI){
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}
const client = new MongoClient(URI);
const db = client.db("book-nook");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});