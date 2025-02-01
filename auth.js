import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend"; // 1. Import the Resend provider
import { MongoDBAdapter } from "@auth/mongodb-adapter"; // 1. Import the MongoDBAdapter from the @auth/mongodb-adapter file
import clientPromise from "./libs/mongo"; // 1. Import the clientPromise from the libs/mongo file

const config = {
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "no-reply@email.avazun.net",
      name: "Email",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise), // 1. Pass the clientPromise to the MongoDBAdapter
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
