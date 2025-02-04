import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";
import ListItems from "@/components/ListItems";
import FAQListItems from "@/components/FAQListItems";
import Demo from "./Demo.jpeg";
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
      <section className="bg-base-200">
        <div className="bg-base-200 flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold">
            <a href="/">BetterProduct</a>
          </div>
          <div className="space-x-4 max-md:hidden">
            <a href="#pricing" className="link link-hover">
              Pricing
            </a>
            <a href="#faq" className="link link-hover">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin session={session} />
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="flex flex-col lg:flex-row gap-14 lg:text-left lg:items-start items-center justify-between px-8 py-32 max-w-5xl mx-auto">
        <Image
          src={Demo}
          alt="Demo of the product"
          className="w-96 rounded-3xl"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Make your product better by collection customers feedbacks
          </h1>

          <div className="opacity-90 mb-10">
            <h2>
              Easily create a feedback board to collect the priority features
              your customers need most. They&apos;ll love it.
            </h2>
          </div>
          <div>
            <ButtonLogin session={session} />
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="bg-base-200" id="pricing">
        <div className="flex flex-col items-center justify-center py-32 px-8 max-w-3xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            <p className="uppercase text-medium text-sm text-primary mb-4">
              Pricing
            </p>
            <p>Choose the price that suits your needs</p>
          </h3>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Collect customer feedback",
                "Use unlimited sites",
                "Detailed dashboard",
                "Your customers are happy",
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
              <ListItems>Your customers are happy</ListItems>
            </ul>
            <ButtonLogin session={session} extraStyle="w-full" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-300 py-32" id="faq">
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          <p className="uppercase text-medium text-sm text-primary mb-4">FAQ</p>
          <p>Frequntly Asked Questions</p>
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
    </main>
  );
}

export default Home;
