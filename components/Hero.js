import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";
import { auth } from "@/auth";
import Olena from "@/public/Olena.png";
import Olena2 from "@/public/Olena2.png";

const session = await auth();
console.log(session);
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-14 lg:text-left lg:items-start items-center justify-between px-8 py-28 max-md:py-14 max-w-5xl mx-auto min-h-screen">
      <div className="max-w-4xl">
        <div className="md:hidden justify-center mb-6 flex">
          <Image src={Olena2} alt="Olena sm" />
        </div>
        <p className="text-sm mb-2 opacity-80">
          300+ happy clients already created ad campaigns with me
        </p>
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 italic">
          Get <b>success</b> ad campaign on Meta or Google in one click 💥
        </h1>

        <div className="opacity-90 mb-6">
          <h2>
            You don't need to hire a full day advertising manager anymore. I'll
            create for you <b>success</b> ad campaign on{" "}
            <b>Facebook/Instagram</b> or <b>Google Adsense</b> with flexible
            tariff plans. <b>Hassle free for you.</b> Just choose your tariff,
            seat and <b> relax</b> . 🏖️.
          </h2>
          <ul className="space-y-2 mt-6 text-sizes-2xl">
            <li>✔️ No need to learn how to create ads</li>
            <li>✔️ You have 100% control of budget</li>
            <li>✔️ Creatives for campain done in 4-7 days</li>
            <li>✔️ Every day ads analysis</li>
            <li>✔️ Every week detailed report</li>
            <li>✔️ Replies within 1st hour</li>
          </ul>
        </div>
        <div className="btn bg-blue-800 hover:bg-blue-600 !h-16">
          <div className="px-8">
            <a className="font-bold text-2xl text-white" href="#pricing">
              Choose your tarrif plan →
            </a>
          </div>
        </div>
        <p className="text-sm mt-4 opacity-80">
          *Only 5 seats availiable on this month
        </p>
      </div>
      <div className="max-md:hidden">
        <Image
          style=""
          src={Olena}
          alt="Demo of the product"
          className="w-96 rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
