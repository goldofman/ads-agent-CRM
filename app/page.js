import Image from "next/image";

import ButtonLogin from "@/components/ButtonLogin";

function Home() {
  const isLoggedIn = true;
  const name = "Ihor";

  return (
    <main>
      <section className="bg-base-200">
        <div className="bg-base-200 flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">BetterProduct</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="flex min-h-screen flex-col text-center justify-between px-8 py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Make your product better by collection customers feedbacks
        </h1>
        <div className="opacity-90 mb-10">
          <h2>
            Easily create a feedback board to collect the priority features your
            customers need most. They'll love it.
          </h2>
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}

export default Home;
