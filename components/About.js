import Image from "next/image";
import Olena3 from "@/public/Olena3.png";

const About = () => {
  return (
    <section className="bg-blue-800 max-md:py-12 py-24 text-white" id="about">
      <div className="max-w-5xl justify-beew mx-auto px-8 flex flex-col lg:flex-row gap-14 lg:text-left lg:items-start items-center">
        <div className="max-w-2xl justify-center mb-6 flex">
          <Image className="max-w-2xl" src={Olena3} alt="Olena about" />
        </div>
        <div className="w-2xl">
          <div className="opacity-90 mb-6">
            Meet the founder:
            <h3 className="text-3xl lg:text-5xl font-bold mb-12 mt-4 italic">
              <p className="text-white">Olena Dzhevaha</p>
            </h3>
            <div className="pt-4">
              I run one women advertising agency working by myself and
              supporting only small batch of clients ad campaigns. I pack the
              all advertising things in a few tariff plans. Just choose yours
              and you on my working list. I will be you ad manger, so be sure
              you will have my attention.{" "}
              <p className="pt-4">
                I'm replying in 1st hour in my working time 9:00-17:00 (Mon-Fri)
                Lisboa time zone
              </p>
            </div>
          </div>
          <div className="btn bg-white hover:bg-blue-100 !h-14">
            <div className="px-4">
              <a className="font-bold text-2xl" href="/#pricing">
                Choose your tarrif plan →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
