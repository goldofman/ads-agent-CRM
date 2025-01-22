import Image from "next/image";

import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Make your product better by collection customers feedbacks</h1>
      <div>
        <h2>
          Easily create a feedback board to collect the priority features your
          customers need most. They'll love it.
        </h2>
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} />
    </main>
  );
}
