import React from "react";

const reviewsData = [
  {
    name: "Maria Smantha",
    title: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 5,
  },
  {
    name: "Daniel Roberts",
    title: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    review:
      "This agency transformed my online presence. Instagram Ads campaigns were a game-changer!",
    rating: 5,
  },
  {
    name: "Olivia Adams",
    title: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    review:
      "I never expected such great results! Facebook ads strategy was perfectly tailored for my audience.",
    rating: 5,
  },
];

const StarIcon = ({ fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    className="h-5 w-5 text-yellow-500"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const Reviews = () => {
  return (
    <section className="bg-white py-28" id="reviews">
      <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
        Testimonials? Sure.
      </h3>
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
          What clients strategy
        </p>
      </div>

      <div className="grid gap-6 text-center max-w-5xl mx-auto md:grid-cols-3 lg:gap-12">
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className={`mb-12 ${index % 3 === 0 ? "md:mb-0" : ""}`}
          >
            <div className="mb-6 flex justify-center">
              <img
                src={review.image}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt={review.name}
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">{review.name}</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
              {review.title}
            </h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300">
              <span className="inline-block pe-2 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              {review.review}
            </p>
            <ul className="mb-0 flex items-center justify-center">
              {[...Array(review.rating)].map((_, i) => (
                <li key={i}>
                  <StarIcon />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
