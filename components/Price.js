import React from "react";

const pricingPlans = [
  {
    title: "$495",
    oldPrice: "$645",
    description: "one time payment",
    features: [
      "Facebook or Instagram ad campaign",
      "Recommended for users without any ads skills",
      "Promo for campaign done in 4-7 days",
      "Ad campaign runs in 5-10 days",
      "Creating up to 5 ads",
      "Perform A/B test for ads",
      "Every day ads analysis",
      "Every week detailed report",
      "Every week campaign optimization",
      "One month supporting",
      "Next month supporting with 50% discount (optional)",
      "Success moderation of ads guaranteed",
      "Full report in the end of campaign",
      "Replies within 1st hour",
    ],
    payLink: (
      <p>
        <a className="font-bold text-2xl text-white w-full" href="/#p1">
          Let's start →
        </a>
      </p>
    ),
    seatsLeft: "Only 4 seats left for this month",
  },
  {
    title: "$945",
    oldPrice: "$1290",
    description: "one time payment",
    features: [
      "Facebook/Instagram and Google Adsense ad campaign",
      "Recommended for users without any ads skills",
      "Promo for campaign done in 5-10 days",
      "Ad campaign runs in 7-12 days",
      "Creating up to 10 ads",
      "Perform A/B test for ads",
      "Every day ads analysis",
      "Every week detailed report",
      "Every week campaign optimization",
      "One month supporting",
      "Next month supporting with 50% discount (optional)",
      "Success moderation of ads guaranteed",
      "Full report in the end of campaign",
      "Replies within 1st hour",
    ],
    payLink: (
      <p>
        <a className="font-bold text-2xl text-white" href="/#p2">
          Let's start →
        </a>
      </p>
    ),
    seatsLeft: "Only 2 seats left for this month",
  },
  {
    title: "$195",
    oldPrice: "$275",
    description: "one time payment",
    features: [
      "Facebook/Instagram or Google Adsense ad campaign",
      "Recommended only for users with ads skills",
      "Promo for campaign done in 4-5 days",
      "Ad campaign runs in 5-7 days",
      "Creating up to 5 ads",
      "-Perform A/B test for ads-",
      "-Every day ads analysis-",
      "-Every week detailed report-",
      "-Every week campaign optimization-",
      "-Next month supporting with 50% discount (optional)-",
      "Success moderation of ads guaranteed",
      "One report after campaign approved",
      "Replies within 1st hour",
    ],
    payLink: (
      <p>
        <a className="font-bold text-2xl text-white" href="/#p3">
          Let's start →
        </a>
      </p>
    ),
    seatsLeft: "Only 6 seats left for this month",
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4 text-green-600"
  >
    <path
      fillRule="evenodd"
      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
      clipRule="evenodd"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4 text-red-500"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 0 1 1.414 0L8 5.414l2.293-2.293a1 1 0 1 1.414 1.414L8.414 8l2.293 2.293a1 1 0 0 1-1.414 1.414L8 9.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L6.586 8 4.293 5.707a1 1 0 0 1 0-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const Price = () => {
  return (
    <section className="bg-blue-800" id="pricing">
      <div className="flex flex-col items-center justify-center py-20 px-8 max-w-full mx-auto">
        <h3 className="text-3xl lg:text-4xl font-extrabold mb-10 text-center">
          <p className="text-white">Choose the price that suits your needs</p>
        </h3>
        <ul className="steps steps-horizontal pb-12 text-white">
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Get success ad campaign</li>
        </ul>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-8 bg-base-100 max-w-96 rounded-3xl space-y-6 border border-blue-700 hover:border-green-600 hover:bg-white hover:border-double flex flex-col h-full"
            >
              <div className="flex items-baseline">
                <div className="relative">
                  <div className="absolute -top-24 -left-14 font-extrabold line-through py-2 px-4 text-3xl text-white bg-gray-500 rounded-full flex items-center justify-center">
                    {plan.oldPrice}
                  </div>
                </div>
                <div className="text-5xl font-black">{plan.title}</div>
                <div className="uppercase px-2 text-sm font-bold opacity-50">
                  {plan.description}
                </div>
              </div>
              <ul className="space-y-2 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex gap-2 items-center ${
                      feature.startsWith("-") ? "line-through" : ""
                    }`}
                  >
                    {feature.startsWith("-") ? <CrossIcon /> : <CheckIcon />}
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="btn btn-primary w-full mt-auto">
                {plan.payLink}
              </div>
              <p className="text-sm mt-2 opacity-80">{plan.seatsLeft}</p>
            </div>
          ))}
        </div>
        <p className="text-white opacity-70 mt-6">
          Tariff plans are updated on{" "}
          <time dateTime="2025-03-01">01.03.2025</time>.
        </p>
      </div>
    </section>
  );
};

export default Price;
