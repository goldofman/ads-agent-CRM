import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hiw from "@/components/Hiw";
import Reviews from "@/components/Reviews";
import UseCasesCarousel from "@/components/UseCasesCarousel";
import Faq from "@/components/Faq";
import Price from "@/components/Price";
import About from "@/components/About";
import Footer from "@/components/Footer";

async function Home() {
  return (
    <main className="min-h-screen">
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
      {/* UseCasesCarousel */}
      <UseCasesCarousel />
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
