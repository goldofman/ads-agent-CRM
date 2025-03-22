"use client";

import React from "react";
import Image from "next/image";
import imgW1 from "@/public/assets/W1.jpg";
import imgM1 from "@/public/assets/M1.jpg";
import img3 from "@/public/assets/3.jpg";
import img4 from "@/public/assets/4.jpg";
import img5 from "@/public/assets/5.jpg";

const UseCasesCarousel = () => {
  const useCases = [
    {
      title: "Beauty Salon – Barcelona, Spain",
      avatar: imgW1,
      budget: "€800/month",
      strategy:
        "Targeted women (23-40 y.o.) interested in hair and nail services. Used engaging video ads showcasing before/after transformations and a limited-time first-visit discount (-10%).",
      adRedirect:
        "Instagram page (DM bookings + link in bio for online reservations)",
      adPeriod: "4 weeks",
      results: [
        "ROI: 2.5x",
        "New Clients: 60+ bookings (average service cost €45)",
      ],
      bgColor: "bg-gray-50",
      accentColor: "bg-pink-500",
    },
    {
      title: "Lawyer (Family Law) – Poland",
      avatar: imgM1,
      budget: "€500/month",
      strategy:
        "The campaign targeted women (25-50 y.o.) searching for legal help with divorce, child custody, and alimony cases. The ad creatives included testimonials from satisfied clients and carousel ads explaining key legal rights in family law.",
      adRedirect: "Website (consultation booking page)",
      adPeriod: "2 months",
      results: [
        "Paid Consultations: 31 (average cost per consultation €100)",
        "Revenue Generated: €3,100",
      ],
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-500",
    },
    {
      title: "Nail Salon – Hamburg, Germany",
      avatar: img3,
      budget: "€500/month",
      strategy:
        'Promoted a "New Season Special – 15% Off Nail Packages". The strategy was to consider only new clients, so people who previously booked a service were excluded from the targeting audience.',
      adRedirect: "Instagram page (DM bookings)",
      adPeriod: "4 weeks",
      results: [
        "ROI: 3x",
        "New Clients: 61 bookings",
        "Revenue Generated: €2,900",
      ],
      bgColor: "bg-purple-50",
      accentColor: "bg-purple-500",
    },
    {
      title: "Real Estate – Barcelona, Spain",
      avatar: img4,
      budget: "€1,200/month",
      strategy:
        "Targeted people looking for modern apartments (€300K-€500K). Used carousel ads with interior & drone footage, plus retargeting website visitors.",
      adRedirect: "Website (landing page with inquiry form)",
      adPeriod: "3 months",
      results: [
        "Leads Generated: 38 pre-qualified leads",
        "Apartments Sold: 3 units, €950K total in sales",
      ],
      bgColor: "bg-green-50",
      accentColor: "bg-green-500",
    },
    {
      title: "E-Commerce (Skincare Brand) – Poland",
      avatar: img5,
      budget: "€1,000/month",
      strategy:
        "Focused on women 25-45 y.o. interested in skincare and beauty. Used a mix of video ads with product demonstrations and testimonials highlighting key benefits.",
      adRedirect: "Website (online store)",
      adPeriod: "1 month",
      results: [
        "Sales Generated: 70+ orders (average order value €35)",
        "Revenue Generated: €3,000",
      ],
      bgColor: "bg-amber-50",
      accentColor: "bg-amber-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of customers who have achieved success with our
            services.
          </p>
        </div>

        <div className="carousel w-full relative">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              id={`usecase${index + 1}`}
              className="carousel-item relative w-full"
            >
              <div className="flex flex-col md:flex-row pt-16 pb-6 md:space-y-0 md:space-x-6 w-full px-4 md:px-12">
                {[0, 1, 2].map((offset) => {
                  const caseIndex = (index + offset) % useCases.length;
                  const currentCase = useCases[caseIndex];

                  return (
                    <div
                      key={caseIndex}
                      className={`card w-full md:w-1/3 ${currentCase.bgColor} border border-gray-200`}
                    >
                      <div className="card-body p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="avatar">
                            <div className="w-16 rounded-full ring ring-white ring-offset-2">
                              <Image
                                src={currentCase.avatar}
                                width={128}
                                height={128}
                                alt="Client"
                              />
                            </div>
                          </div>
                          <h3 className="card-title text-xl font-bold">
                            {currentCase.title}
                          </h3>
                        </div>

                        <div
                          className={`divider ${currentCase.accentColor} h-1 rounded-full w-16 my-4`}
                        ></div>

                        <div className="space-y-4 text-gray-700">
                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-20">
                              Ad Budget:
                            </span>
                            <span>{currentCase.budget}</span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-20">
                              Strategy:
                            </span>
                            <span>{currentCase.strategy}</span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-20">
                              Redirected To:
                            </span>
                            <span>{currentCase.adRedirect}</span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="font-bold min-w-20">
                              Ad Period:
                            </span>
                            <span>{currentCase.adPeriod}</span>
                          </div>

                          <div className="pt-4 border-t border-gray-200">
                            <p className="font-bold text-lg mb-2">Results:</p>
                            <ul className="space-y-2">
                              {currentCase.results.map((result, rIndex) => (
                                <li
                                  key={rIndex}
                                  className="flex items-center gap-2"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full ${currentCase.accentColor}`}
                                  ></div>
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                <a
                  href={`#usecase${index === 0 ? useCases.length : index}`}
                  className="btn btn-circle btn-outline border-2"
                >
                  ❮
                </a>
                <a
                  href={`#usecase${
                    index === useCases.length - 1 ? 1 : index + 2
                  }`}
                  className="btn btn-circle btn-outline border-2"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesCarousel;
