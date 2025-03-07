import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoose from "mongoose"; // Файл для підключення до MongoDB

export const authOptions = {
  providers: [
    EmailProvider({
      server: process.env.RESEND_API_KEY,
      from: "no-reply@email.avazun.net",
    }),
  ],
  adapter: MongoDBAdapter(mongoose),
  pages: {
    signIn: "/login",
    verifyRequest: "/verify-request",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "email") {
        const db = await mongoose;
        const customersCollection = db.db().collection("customers");

        const isCustomer = await customersCollection.findOne({
          email: user.email,
        });

        if (!isCustomer) {
          return "/#pricing"; // Перенаправляємо, якщо немає в базі
        }
      }
      return true;
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
