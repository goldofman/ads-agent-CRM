import ButtonLogin from "@/components/ButtonLogin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hiw from "@/components/Hiw";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ListItems from "@/components/ListItems";
import FAQListItems from "@/components/FAQListItems";
import { auth } from "@/auth";

async function Home() {
  const session = await auth();
  console.log(session);

  // const greeting1 = "Hello" + name;
  // console.log(greeting1);
  // // OUTPUT 1: "Hello Ihor"
  // const greeting2 = `Hello ${isLoggedIn ? name : "there"}`;
  // console.log(greeting2);
  // // OUTPUT 2: "Hello Ihor"

  // canVote = age >= 18 ? "Yes" : "No";
  // // condition ? value if true : value if false

  // console.log(canVote);
  // // Output: Yes

  return (
    <main>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Pricing */}
      <section className="bg-blue-800 opacity=50" id="pricing">
        <div className="flex flex-col items-center justify-center py-32 px-8 max-w-full mx-auto">
          <ul className="steps steps-vertical lg:steps-horizontal pb-4">
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Get success ad campaign</li>
          </ul>
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            <p className="text-white">Choose the price that suits your needs</p>
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="p-8 bg-base-100 max-w-96 rounded-3xl space-y-6  border border-blue-500 hover:drop-shadow-lg">
              <div className="flex gap-2 items-baseline">
                <div className="text-5xl font-black">$495</div>
                <div className="uppercase text-sm font-medium opacity-60">
                  one time payment
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Facebook or Instagram ad campaign",
                  "Promo for campaign done in 4-7 days",
                  "Ad campaign runs in 5-10 days",
                  "Creating up to 5 ads",
                  "Perfom A/B test for ads",
                  "Every day ads analysis",
                  "Every week detailed report",
                  "Every week campaign optimisation",
                  "One month supporting",
                  "Next month supporting with 50% discount (optional)",
                  "Replies within 1st hour",
                ].map((priceItem) => {
                  return (
                    <li className="flex gap-2 items-center" key={priceItem}>
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {priceItem}
                    </li>
                  );
                })}
              </ul>
              <div className="btn btn-primary w-full">
                <a className="font-bold text-2xl text-white" href="#pricing">
                  Let's start →
                </a>
              </div>
              <p className="text-sm mt-2 opacity-80">
                *Only 4 seats left for this month
              </p>
            </div>
            <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
              <div className="flex gap-2 items-baseline">
                <div className="text-5xl font-black flex justify-center pb-2">
                  "Full pack"
                </div>
                <div className="text-5xl font-black">
                  <p>$945</p>
                </div>
                <div className="uppercase text-sm font-medium opacity-60">
                  one time payment
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Facebook/Instagram and Google Adsense ad campaign",
                  "Promo for campaign done in 5-10 days",
                  "Ad campaign runs in 7-12 days",
                  "Creating up to 10 ads",
                  "Perfom A/B test for ads",
                  "Every day ads analysis",
                  "Every week detailed report",
                  "Every week campaign optimisation",
                  "One month supporting",
                  "Next month supporting with 50% discount (optional)",
                  "Replies within 1st hour",
                ].map((priceItem) => {
                  return (
                    <li className="flex gap-2 items-center" key={priceItem}>
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {priceItem}
                    </li>
                  );
                })}
              </ul>
              <div className="btn btn-primary w-full">
                <a className="font-bold text-2xl text-white " href="#pricing">
                  Let's start →
                </a>
              </div>
              <p className="text-sm mt-2 opacity-80">
                *Only 2 seats left for this month
              </p>
            </div>
            <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
              <div className="flex gap-2 items-baseline">
                <div className="text-5xl font-black">$195</div>
                <div className="uppercase text-sm font-medium opacity-60">
                  one time payment
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Facebook/Instagram or Google Adsense ad campaign",
                  "Recomended only for users with ads skills",
                  "Promo for campaign done in 4-5 days",
                  "Ad campaign runs in 5-7 days",
                  "Creating up to 5 ads",
                  "-Perfom A/B test for ads-",
                  "-Every day ads analysis-",
                  "-Every week detailed report-",
                  "-Every week campaign optimisation-",
                  "-Next month supporting with 50% discount (optional)-",
                  "Success moderation of ads guaranteed",
                  "One report after cmpaign approved",
                  "Replies within 1st hour",
                ].map((priceItem) => {
                  return (
                    <li className="flex gap-2 items-center" key={priceItem}>
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {priceItem}
                    </li>
                  );
                })}
              </ul>
              <div className="btn btn-primary w-full">
                <a className="font-bold text-2xl text-white " href="#pricing">
                  Let's start →
                </a>
              </div>
              <p className="text-sm mt-2 opacity-80">
                *Only 6 seats left for this month
              </p>
            </div>
          </div>
          <p className="text-white opacity-70 mt-6">
            Tariff plans are updated on{" "}
            <time datetime="01-03-2025">01.03.2025</time>.
          </p>
        </div>
      </section>
      {/* How it works */}
      <Hiw />
      {/* FAQ */}
      <section className="bg-base-100 py-32" id="faq">
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          <p className="uppercase text-medium text-sm text-primary mb-4">FAQ</p>
          <p>Knowledge base</p>
        </h3>
        <ul className="max-w-lg mx-auto">
          {[
            {
              question: "Can i pay later using klarma?",
              answer: "No, you can't",
            },
            {
              question: "What you refund policy?",
              answer: "We haven't refund options.",
            },
            {
              question: "Can I cancel my subscription?",
              answer: "Yes, you can cancel anytime.",
            },
          ].map((qa) => (
            <FAQListItems key={qa.question} qa={qa} />
          ))}
        </ul>
      </section>
      {/* About */}
      <About />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;
