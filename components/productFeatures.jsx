"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/BaseTabs";
import { BookOpen, Bell, Users, Building, TrendingUp } from "lucide-react";

const rawFeatures = [
  { id: 1, img: "/images/product_feature_01.webp", title: "Admission Management", desc: "Our Admission Management System is an integral part of a modern school management.", category: "Core" },
  { id: 2, img: "/images/product_feature_02.webp", title: "Fee Management", desc: "A simple module to track fee records of all students.", category: "Core" },
  { id: 3, img: "/images/product_feature_03.webp", title: "Attendance Management", desc: "eSM attendance module rightly addresses the attendance issues.", category: "Core" },
  { id: 4, img: "/images/product_feature_04.webp", title: "Result Management", desc: "Result automation through an error-free digital system.", category: "Core" },
  { id: 5, img: "/images/product_feature_05.webp", title: "Human Resource Management", desc: "eSM Assists you as your human resource manager to keep an eye on your staff.", category: "Staff & HR" },
  { id: 6, img: "/images/product_feature_06.webp", title: "Library", desc: "Library management tracks all the operations performed in a library.", category: "Infrastructure" },
  { id: 7, img: "/images/product_feature_07.webp", title: "Parents Portal (Android App)", desc: "A Digital Diary, for parents to stay connected with school from anywhere.", category: "Communication" },
  { id: 8, img: "/images/product_feature_08.webp", title: "SMS", desc: "Most important tool to communicate instantly with institute’s audience.", category: "Communication" },
  { id: 9, img: "/images/product_feature_09.webp", title: "Question Paper Generator", desc: "This module allows the examination department to generate exam papers.", category: "Communication" },
  { id: 10, img: "/images/product_feature_10.webp", title: "Finance Management", desc: "A financial management system is a software that an organization uses to track finance.", category: "Staff & HR" },
  { id: 11, img: "/images/product_feature_11.webp", title: "Inquiry", desc: "In a reputable organization, they keep data of visitors who are interested.", category: "Core" },
  { id: 12, img: "/images/product_feature_12.webp", title: "Complaints", desc: "Along with eSM, CAS is providing Parents Application which is complaint-ready.", category: "Communication" },
  { id: 13, img: "/images/product_feature_13.webp", title: "Academics", desc: "Managing academics is about managing courses, subjects, and teaching schedules.", category: "Core" },
  { id: 14, img: "/images/product_feature_14.webp", title: "User & Privileges", desc: "This module allows Institute management to create users and manage privileges.", category: "Staff & HR" },
  { id: 15, img: "/images/product_feature_15.webp", title: "Assets Management", desc: "Asset management manages the consumable and non-consumable assets of school.", category: "Infrastructure" },
  { id: 16, img: "/images/product_feature_16.webp", title: "Events Management", desc: "This module helps you to create events, notify parents, and stakeholders.", category: "Core" },
  { id: 17, img: "/images/product_feature_17.webp", title: "Transport", desc: "It enables Institute management to manage transportation operations.", category: "Infrastructure" },
  { id: 18, img: "/images/product_feature_18.webp", title: "Hostel Management", desc: "Hostel management is a crucial component of school management for students.", category: "Infrastructure" },
  { id: 19, img: "/images/product_feature_19.webp", title: "Institute Branding", desc: "Institute branding is a comprehensive module that plays a pivotal role.", category: "Growth & Branding" },
  { id: 20, img: "/images/product_feature_20.webp", title: "Students Consulting", desc: "A student consultancy module dedicated to helping students with guidance.", category: "Communication" },
  { id: 21, img: "/images/product_feature_21.webp", title: "Franchise Management", desc: "The Franchise Management Module in a School Management System.", category: "Growth & Branding" },
];

const categories = {
  Core: { label: "Core Administration", icon: BookOpen },
  Communication: { label: "Communication & Tools", icon: Bell },
  "Staff & HR": { label: "Staff & Finance", icon: Users },
  Infrastructure: { label: "Infrastructure & Assets", icon: Building },
  "Growth & Branding": { label: "Growth & Branding", icon: TrendingUp },
};

// Feature Card
const FeatureCard = ({ feature }) => (
  <div
    key={feature.id}
    className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center flex flex-col border border-white/20 hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay={feature.id * 50} // stagger effect
  >
    <Image
      src={feature.img}
      alt={feature.title}
      width={80}
      height={80}
      className="mx-auto mb-4 w-16 h-16 object-contain"
    />
    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
    <p className="text-sm text-gray-200 flex-grow">{feature.desc}</p>
    <button className="mt-4 inline-block mx-auto rounded-full cursor-pointer px-6 py-2 text-sm font-semibold text-white bg-[rgb(252,147,61)] border border-[rgb(255,115,0)] transition duration-300 hover:bg-orange-600 hover:border-orange-600 shadow-lg">
      Read More
    </button>
  </div>
);

export default function ProductFeatures() {
  const defaultTab = Object.keys(categories)[0];
  const [activeTab, setActiveTab] = useState(defaultTab);

  const groupedFeatures = useMemo(() => {
    return rawFeatures.reduce((acc, feature) => {
      const cat = feature.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(feature);
      return acc;
    }, {});
  }, []);

  // Init AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="py-20 bg-gradient-to-tr from-[#237EFD] via-[#24B0FE] to-[#24E2FF]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div
          className="text-center mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Product Modules
          </h1>
          <p className="text-lg md:text-xl mt-6 text-white/90">
            Start using a powerful cloud-based school management system to
            streamline your institute’s operations, reduce costs, save time, and
            increase efficiency. Select a module below to explore its details.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList
            className="flex flex-wrap justify-center gap-3 p-2 bg-white/20 rounded-full mx-auto max-w-6xl mb-12 shadow-inner"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {Object.entries(categories).map(([key, { label, icon: Icon }]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-base font-semibold transition-all duration-300 
                  ${
                    activeTab === key
                      ? "bg-white text-orange-500 shadow-xl"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {Object.entries(categories).map(([key]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                {groupedFeatures[key]?.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
