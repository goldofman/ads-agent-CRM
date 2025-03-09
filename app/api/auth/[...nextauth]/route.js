import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/utils/mongodb"; // Додаємо модель користувача

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise), // Використовуємо адаптер MongoDB
  providers: [
    Resend({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Email і пароль обов'язкові");
        }

        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/check-customer`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email }),
          }
        );

        const user = await res.json();
        if (!user.exists) {
          throw new Error("Користувача не знайдено");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  debug: true, // Увімкніть для логування помилок
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
