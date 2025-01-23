import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Make your product better by collection customers feedbacks",
  description:
    "Easily create a feedback board to collect the priority features your customers need most. They'll love it. It's free",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="corporate" /* include daisyui theme from tailwind.config */
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
