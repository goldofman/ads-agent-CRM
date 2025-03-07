import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hiw from "@/components/Hiw";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Price from "@/components/Price";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { auth } from "@/auth";

async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Pricing */}
      <Price />
      {/* How it works */}
      <Hiw />
      {/* Reviews */}
      <Reviews />
      {/* FAQ */}
      <Faq />
      {/* About */}
      <About />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;
