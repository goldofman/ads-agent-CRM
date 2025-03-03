import ButtonLogin from "@/components/ButtonLogin";
import { auth } from "@/auth";

const session = await auth();
console.log(session);
const Header = () => {
  return (
    <section className="bg-base-200">
      <div className="bg-base-200 flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
        <div className="font-bold">
          <a href="/">BetterProduct</a>
        </div>
        <div className="space-x-4 max-md:hidden">
          <a href="#pricing" className="link link-hover">
            Tariff plans
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
  );
};

export default Header;
