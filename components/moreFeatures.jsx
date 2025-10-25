"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseESM() {
  // ✅ Init AOS yahin pe
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed
      once: true,     // Sirf 1 dafa chale
    });
  }, []);

  const sections = [
    {
      id: 1,
      title: "Analyze Your Data with Powerful Tools",
      description:
        "This Software helps schools manage their data simply and efficiently. It gives teachers and administrators useful information to make better decisions. From tracking student performance to managing school resources, this powerful tool is designed to improve how schools work and boost academic success.",
      subTitle: "Why Our Software Is Perfect for Schools",
      iconBg: "/images/features_icon_01.webp",
      image: {
        src: "/images/home-10/service_one.png",
        alt: "Data analysis dashboard illustration",
      },
      list: [
        {
          title: "Designed for Easy Use",
          text: "This school management system is created to perfectly fit into your school’s daily activities...",
        },
        {
          title: "Real-Time Updates Anytime, Anywhere",
          text: "Stay connected no matter where you are. It keeps your data updated instantly...",
        },
        {
          title: "Get Useful Insights with Advanced Analytics",
          text: "This software helps you understand your school’s performance with clear, detailed reports...",
        },
      ],
    },
    {
      id: 2,
      title: "Collaborate Securely Everything",
      description:
        "Keep your data safe and your team connected with the School Management software...",
      iconBg: "/images/features_icon_02.webp",
      image: {
        src: "/images/home-10/Design.png",
        alt: "Collaboration and secure design illustration",
      },
      list: [
        {
          title: "Real-Time Notifications to Stay Updated",
          text: "Never miss an important update again! Pakistan's Best School management system provides...",
        },
        {
          title: "Global Connectivity for Seamless Operations",
          text: "This Software connects your school operations no matter where you are...",
        },
      ],
    },
    {
      id: 3,
      title: "Fee Collection with Online Payment",
      description:
        "Simplify your school’s financial management with our secure online fee collection system...",
      iconBg: "/images/features_icon_03.webp",
      image: {
        src: "/images/home-10/enterprice.png",
        alt: "Online payment and fee collection illustration",
      },
      list: [
        {
          title: "Multiple Payment Gateways for Flexibility",
          text: "Support for various payment methods, including credit/debit cards, bank transfers...",
        },
        {
          title: "Automated Receipts and Record Keeping",
          text: "Every payment generates an automated receipt, reducing paperwork...",
        },
      ],
    },
  ];

  return (
    <div className="pt-16 pb-8 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#0055b1]"
            data-aos="fade-up"
          >
            Why choose eSM?
          </h1>
          <p
            className="text-gray-600 text-lg md:text-xl leading-relaxed mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            This software helps institutions manage data efficiently, providing
            teachers and administrators with actionable insights. From tracking
            student performance via student management systems to optimizing
            resources with automated timetables, this all-in-one platform
            enhances productivity and learning outcomes.
          </p>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Image Block */}
            <div
              className={`relative w-full ${
                index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="aspect-[1.4/1] relative w-full mx-auto">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Block */}
            <div
              className={`pr-6 ${
                index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-lg bg-gray-100">
                <Image
                  src={section.iconBg}
                  alt={`${section.title} icon`}
                  width={120}
                  height={120}
                  className="w-full h-auto"
                />
              </div>

              <h4 className="text-xl font-medium text-[#051441] mb-5">
                {section.title}
              </h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {section.description}
              </p>

              {section.subTitle && (
                <h4 className="text-lg font-semibold text-[#051441] mb-6">
                  {section.subTitle}
                </h4>
              )}

              <ul className="space-y-6">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <Image
                      src="/images/check1.webp"
                      alt="Checkmark icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#2c2c51] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
