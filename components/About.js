import Link from "next/link";
import Image from "next/image";
import Olena3 from "@/public/Olena3.png";

const About = () => {
  return (
    <section className="bg-blue-800 max-md:py-12 py-24 text-white" id="about">
      <div className="max-w-5xl justify-beew mx-auto px-8 flex flex-col lg:flex-row gap-14 lg:text-left lg:items-start items-center">
        <div className="max-w-2xl justify-center mb-6 flex">
          <Image
            className="max-w-2xl rounded-3xl"
            src={Olena3}
            alt="Olena about"
          />
        </div>
        <div className="w-2xl">
          <div className="opacity-90 mb-6">
            Meet the founder:
            <h3 className="text-3xl lg:text-5xl font-bold mb-12 mt-4 italic">
              <p className="text-white">Olena Dzhevaha</p>
            </h3>
            <div className="pt-4">
              I run an advertising agency, working independently and managing a
              select number of client ad campaigns. I offer all-inclusive
              advertising services through a few simple tariff plans - just pick
              yours, and you're on my client list! As your dedicated ad manager,
              you’ll have my full attention.
              <p className="pt-4">
                I respond within the 1st hour during my working hours: Monday to
                Friday, 9:00-17:00 (Mon-Fri) Lisbon time zone
              </p>
            </div>
          </div>
          <div className="btn bg-white hover:bg-blue-100 !h-14  !rounded-3xl">
            <div className="px-4">
              <Link className="font-bold text-2xl" href="/#pricing">
                Check my tariff plans →
              </Link>
            </div>
          </div>
          <p className="mt-4">
            Have additional questions?{" "}
            <Link
              title="and get 10% off promo code"
              className="mt-6 underline decoration-dashed underline-offset-4 decoration-base-400 hover:text-blue-300"
              href=""
            >
              Schedule a paid consultation
            </Link>{" "}
            and get a 10% off promo code
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
