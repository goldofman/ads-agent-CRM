import Link from "next/link";

const Faq = () => {
  return (
    <section className="bg-base-100 py-32" id="faq">
      <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
        <p className="uppercase text-medium text-sm text-primary mb-4">FAQ</p>
        Knowledge base
      </h3>
      <div className="flex max-w-5xl mx-auto px-4">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              I'm too much newy in advertising, can you help me?
            </div>
            <div className="collapse-content">
              <p>
                Yes, please, schedule a paid consultation with me by this{" "}
                <Link className="hover:text-blue-300 text-blue-600" href="">
                  link
                </Link>
                . I will help you to understand the basics of advertising and
                how to start your first campaign.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How do you work with clients? What is the process?
            </div>
            <div className="collapse-content">
              <p>
                After your purchase I'm contacting asking more details about
                your bussiness and your goals. Then we're choosing optimal
                strategy and ...
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can you help me to create a website?
            </div>
            <div className="collapse-content">
              <p>Yes, the price depends on your needs.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can you handle a big company advertising?
            </div>
            <div className="collapse-content">
              <p>
                I'm not sure. It's depends how much products do you need to
                promote and the qty of ads. We can disscuss it.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What you refund policy?
            </div>
            <div className="collapse-content">
              <p>We haven't refund options</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I cancel my subscription?
            </div>
            <div className="collapse-content">
              <p>Yes, you can cancel anytime.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-200 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I cancel my subscription?
            </div>
            <div className="collapse-content">
              <p>Yes, you can cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
