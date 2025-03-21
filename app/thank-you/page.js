import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default async function ThankYou() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      <div className="bg-gray-100 h-screen">
        <div className="p-16 mx-auto max-w-4xl">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="text-2xl text-gray-900 font-semibold">
              Payment Done Successfully!
            </h3>
            <h2 className="text-xl font-semibold my-2">
              Thank you for purchase ❤️ I'm so glad that you decided to work
              with me 😊
            </h2>
            <p className="my-8">
              I'll add your email that you provided with payment into our online
              workspace for a better communication and productive work. So,
              please, check your email and accept my invitation.
            </p>
            <p>I will contact you in the nearest time.</p>
            <br />
            <p>
              <b>My working time:</b> 9:00-17:00 (Mon-Fri) Lisbon time zone 🕟
            </p>
            <br />
            <p> Have a great day! And see you!</p>
            <br />
            <p>
              P.S. Please click on the link below and fill out the form with
              detailed information about your business and goals. I need this to
              better understand the strategy and save our time.
            </p>
            <div className="py-10">
              <a
                href="https://jeva.fillout.com/t/9yNu2rXUpsus"
                className="btn bg-blue-800 hover:bg-blue-600 h-14 rounded-3xl text-xl text-white py-3 px-6"
              >
                Please, fill this form
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <About />
      {/* Footer */}
      <Footer />
    </main>
  );
}
