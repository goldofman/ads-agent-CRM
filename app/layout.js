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
  title: "Make your product better by collection customers feedbacks",
  description:
    "Easily create a feedback board to collect the priority features your customers need most. They'll love it. It's free",
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
