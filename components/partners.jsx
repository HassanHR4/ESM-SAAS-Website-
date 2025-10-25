"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { InfiniteSlider } from '@/components/ui/InfiniteSlider';
import AOS from "aos";
import "aos/dist/aos.css";

export default function PartnersSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center px-6">

        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-[#2c5ca3]"
        >
          Trusted by 200+ Schools
        </h1>
        <p
          data-aos="fade-down"
          data-aos-delay="150"
          className="text-lg md:text-xl text-black mx-auto mt-6"
        >
          Join a global network of over 200+ schools that trust our leading school management
          software for reliable and efficient operations in Pakistan. Designed to enhance
          educational management, our platform offers seamless integration, advanced features,
          and exceptional support to streamline every aspect of your institution.
        </p>

        <div className="py-12" data-aos="fade-down" data-aos-delay="300">
          <InfiniteSlider gap={24} reverse>
            <img src='/images/1.webp' className='h-[120px] w-auto' />
            <img src='/images/2.webp' className='h-[120px] w-auto' />
            <img src='/images/3.webp' className='h-[120px] w-auto' />
            <img src='/images/4.webp' className='h-[120px] w-auto' />
            <img src='/images/5.webp' className='h-[120px] w-auto' />
            <img src='/images/6.webp' className='h-[120px] w-auto' />
            <img src='/images/7.webp' className='h-[120px] w-auto' />
            <img src='/images/8.webp' className='h-[120px] w-auto' />
            <img src='/images/9.webp' className='h-[120px] w-auto' />
          </InfiniteSlider>
        </div>

        <div className="pb-12" data-aos="fade-down" data-aos-delay="500">
          <InfiniteSlider gap={24}>
            <img src='/images/10.webp' className='h-[120px] w-auto' />
            <img src='/images/11.webp' className='h-[120px] w-auto' />
            <img src='/images/12.webp' className='h-[120px] w-auto' />
            <img src='/images/13.webp' className='h-[120px] w-auto' />
            <img src='/images/14.webp' className='h-[120px] w-auto' />
            <img src='/images/15.webp' className='h-[120px] w-auto' />
            <img src='/images/16.webp' className='h-[120px] w-auto' />
            <img src='/images/17.webp' className='h-[120px] w-auto' />
          </InfiniteSlider>
        </div>

      </div>
    </div>
  );
}
