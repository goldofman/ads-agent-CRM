import Link from "next/link";

const faqData = [
  {
    title: "I'm too much newy in advertising, can you help me?",
    content: (
      <p>
        Yes, please, schedule a paid consultation with me by this link -{" "}
        <Link className="hover:text-blue-300 text-blue-600" href="">
          Schedule paid consultation
        </Link>
        . I will help you to understand the basics of advertising and how to
        start your first campaign. If you decide to work with me after the
        consultation, I will give you a <b>20% discount</b> on any of my pricing
        plans.
      </p>
    ),
    defaultChecked: true,
  },
  {
    title: "How do you work with clients? What is the process?",
    content: (
      <p>
        After your purchase I&apos;m contacting asking more details about your
        business and your goals. Then we&apos;re choosing optimal strategy and
        ...
      </p>
    ),
  },
  {
    title: "Can you help me to create a website?",
    content: <p>Yes, the price depends on your needs.</p>,
  },
  {
    title: "Can you handle a big company advertising?",
    content: (
      <p>
        I&apos;m not sure. It depends how much products do you need to promote
        and the qty of ads. We can discuss it.
      </p>
    ),
    defaultChecked: true,
  },
  {
    title: "What is your refund policy?",
    content: <p>We haven&apos;t refund options</p>,
  },
  {
    title: 'What do you mean when you say "get success ad campaign"?',
    content: (
      <p>
        Successfuly moderation pass, active, doint with all requirement by
        meta/google with working promo ads.
      </p>
    ),
  },
  {
    title: 'Can I cancel my "ads supporting" subscription?',
    content: (
      <p>
        Yes, you can cancel anytime. Your ads campaign will be acttive in your
        meta/google cabinet anyway even after you cancel subscribtion for my
        support.
      </p>
    ),
  },
  {
    title: "Did you work with semi legal services/products?",
    content: (
      <p>
        No. I&apos;m working <b>only</b> with legal services/products that
        allows by Meta/Google.
      </p>
    ),
  },
  {
    title: "Do I need to have my own Meta/Google ads cabinet?",
    content: (
      <p>
        Yes. You need to have your own Meta/Google ads cabinet. I will help you
        to create it if you don&apos;t have it yet. Here is the{" "}
        <Link className="hover:text-blue-300 text-blue-600" href="">
          insctruction
        </Link>
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <section className="bg-white py-28 rounded-t-3xl" id="faq">
      <div className="!rounded-t-3xl">
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          Knowledge base
        </h3>
        <div className="flex max-w-5xl mx-auto px-4">
          <div className="join join-vertical w-full">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border-base-200 border"
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  defaultChecked={item.defaultChecked}
                />
                <div className="collapse-title text-xl font-medium">
                  {item.title}
                </div>
                <div className="collapse-content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
