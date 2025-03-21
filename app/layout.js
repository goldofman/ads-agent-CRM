import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900", "1000"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get success ad campaign on Facebook or Instagram in one  click",
  description:
    "I run for you success ad campaign on Facebook or Instagram with flexible tariff plans. Hassle free for you. Just choose wour tariff, seat and relax.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="mytheme"
      /* include daisyui theme from tailwind.config */
      className="scroll-smooth"
    >
      <body className={nunito.className}>
        <div>
          <Toaster />
        </div>
        {children}
      </body>
    </html>
  );
}
