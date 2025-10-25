"use client";
import Image from "next/image";
import Carousel from "@/components/ui/Carousel"; // make sure path is correct

const featuresData = [
  {
    icon: "/images/features_icon_01.webp",
    title: "Highly Customizable",
    cardTitle: "Features You’ll Love",
    description: (
      <>
        ESM offers a highly customizable{" "}
        <strong className="text-[#286aaf]">school management system</strong>{" "}
        designed for schools, colleges, and institutions across Pakistan.
      </>
    ),
    points: [
      "Customized solutions based on school’s specific needs.",
      "Automated school timetable scheduling.",
      "Seamless LMS integration.",
    ],
  },
  {
    icon: "/images/features_icon_02.webp",
    title: "Dedicated Partner Support",
    cardTitle: "What We Offer",
    description: (
      <>
        We deliver more than software – we're your partners in institutional
        growth.
      </>
    ),
    points: [
      "Biometric attendance & school software integration.",
      "LMS setup and management.",
      "Trusted by top schools in Pakistan.",
    ],
  },
  {
    icon: "/images/features_icon_03.webp",
    title: "24/7 Expert Help",
    cardTitle: "Why Our Support Stands Out",
    description: (
      <>We’re always here to help! Our educational software offers 24/7 support.</>
    ),
    points: [
      "WhatsApp, email & phone support anytime.",
      "Fast and friendly help.",
      "Expert advice for schools in Pakistan.",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#f5f7fb] py-16" id="features">
      <div className="container mx-auto text-center px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#01458d] mb-3">
          Unique Features
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          “An investment in education pays the best interest."
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="w-full max-w-6xl mx-auto mt-12">
        <Carousel
          items={featuresData.map((feature, idx) => ({
            id: idx,
            title: feature.title,
            description: (
              <div className="w-full flex flex-col md:flex-row items-start gap-6 text-left bg-white rounded-xl shadow-lg p-6 md:p-10">
                {/* Icon Left */}
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    width={60}
                    height={60}
                    className="mx-auto md:mx-0"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-[#01458d] text-2xl font-bold mb-3">
                    {feature.cardTitle}
                  </h3>
                  <p className="mb-4 text-gray-700">{feature.description}</p>
                  <ul className="space-y-2 text-gray-700 text-base">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Image
                          src="/images/check1.webp"
                          alt="Check"
                          width={20}
                          height={20}
                          className="mr-2 mt-1 flex-shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          }))}
          baseWidth="100%" // stretch full width
          autoplay={true}
          autoplayDelay={3500}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </section>
  );
}
