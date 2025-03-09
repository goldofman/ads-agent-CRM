import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";
import { auth } from "@/auth";
import Olena from "@/public/Olena.png";
import Olena2 from "@/public/Olena2.png";

const session = await auth();
console.log(session);
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-14 lg:text-left lg:items-start items-center justify-between px-8 py-20 max-md:py-14 max-w-5xl mx-auto min-h-screen">
      <div className="max-w-4xl">
        <div className="md:hidden justify-center mb-6 flex">
          <Image src={Olena2} alt="Olena sm" />
        </div>
        <p className="text-sm mb-2 opacity-80">
          <b>300+</b> happy clients already created ad campaigns with me
        </p>
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 italic">
          Get{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-400">
            success
          </span>{" "}
          ad campaign on Meta or Google in one click 💥
        </h1>

        <div className="opacity-90 mb-6">
          <h2>
            You don't need to hire a full day advertising manager anymore. I'll
            create for you{" "}
            <span className="underline decoration-dashed underline-offset-8 decoration-base-400">
              success
            </span>{" "}
            ad campaign on <b>Facebook/Instagram</b> or <b>Google Adsense</b>{" "}
            with flexible tariff plans. <b>Hassle free for you.</b> Just choose
            your tariff, seat and <b> relax</b> . 🏖️.
          </h2>
          <ul className="space-y-2 mt-6 text-sizes-2xl">
            <li className="flex items-center">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="18.000000pt"
                height="17.000000pt"
                viewBox="0 0 68.000000 64.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                {" "}
                <g
                  transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                  fill="#16a34a"
                  stroke="none"
                >
                  {" "}
                  <path d="M528 539 c-10 -5 -61 -95 -114 -199 -55 -111 -101 -190 -109 -190 -14 0 -54 53 -95 127 -28 51 -41 57 -86 38 -30 -12 -33 -16 -25 -39 20 -50 76 -140 111 -177 91 -96 162 -26 329 324 28 59 51 112 51 117 0 13 -40 12 -62 -1z" />{" "}
                </g>{" "}
              </svg>
              No need to learn how to create ads
            </li>
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
        <div className="text-sm mt-4 opacity-80">
          *Only 12 seats availiable this month
          <p>
            Updated on <time dateTime="2025-03-01">01.03.2025</time>.
          </p>
        </div>
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
