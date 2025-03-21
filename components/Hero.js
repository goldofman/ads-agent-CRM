import Image from "next/image";
import Olena from "@/public/Olena.png";
import Olena2 from "@/public/Olena2.png";

const checkIcon = (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="20.000000pt"
    height="18.000000pt"
    viewBox="0 0 68.000000 64.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
      fill="#16a34a"
      stroke="none"
    >
      <path d="M528 539 c-10 -5 -61 -95 -114 -199 -55 -111 -101 -190 -109 -190 -14 0 -54 53 -95 127 -28 51 -41 57 -86 38 -30 -12 -33 -16 -25 -39 20 -50 76 -140 111 -177 91 -96 162 -26 329 324 28 59 51 112 51 117 0 13 -40 12 -62 -1z" />{" "}
    </g>{" "}
  </svg>
);

const Hero = () => {
  const benefits = [
    "No need to learn how to create ads",
    "You have 100% control of budget",
    "Creatives for campaign done in 4-7 days",
    "Every day ads analysis",
    "Every week detailed report",
    "Replies within 1st hour",
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-14 lg:text-left lg:items-start items-center justify-between px-8 py-16 max-md:py-14 max-w-5xl mx-auto min-h-screen">
      <div className="max-w-4xl">
        <div className="md:hidden justify-center mb-6 flex">
          <Image src={Olena2} alt="Olena sm" />
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 italic">
          Get{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-400">
            successful
          </span>{" "}
          ad campaign on Facebook and Instagram in one click 💥
        </h1>
        <div className="opacity-90 mb-6">
          <h2>
            You don't need to hire a full day advertising manager anymore. I'll
            create for you{" "}
            <span className="underline decoration-dashed underline-offset-8 decoration-base-400">
              success
            </span>{" "}
            <b>Facebook</b> and <b>Instagram</b> ad campaign with flexible
            tariff plans. <b>Hassle free for you.</b> Just choose your tariff,
            seat and <b> relax</b> . 🏖️.
          </h2>
          <div className=" flex pt-4  justify-items-center">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://randomuser.me/api/portraits/men/78.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://randomuser.me/api/portraits/men/29.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://randomuser.me/api/portraits/women/35.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://randomuser.me/api/portraits/men/34.jpg" />
                </div>
              </div>
            </div>
            <p className="text-sm pt-5 opacity-80">
              <b>200+ happy clients</b> boosted their sells
            </p>
          </div>
          <ul className="space-y-2 mt-6 text-sizes-2xl">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                {checkIcon} {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="btn bg-blue-800 hover:bg-blue-600 !h-14 !rounded-3xl">
          <div className="px-8">
            <a className="font-bold text-2xl text-white" href="#pricing">
              Check my tariff plans →
            </a>
          </div>
        </div>
        <div className="text-sm mt-4 opacity-80">
          *Only 5 seats available this month
          <p>
            Updated on <time dateTime="2025-03-01">15.03.2025</time>.
          </p>
        </div>
      </div>
      <div className="max-md:hidden">
        <Image
          src={Olena}
          alt="Demo of the product"
          className="w-96 rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
