"use client";
import RotatingText from "@/components/ui/RotatingText";
import Iridescence from "@/components/ui/Iridescence";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Banner = () => {
   const [hovered, setHovered] = useState(false); 

  return (
    <div className="relative z-[1] overflow-hidden">
      {/* Background Iridescence Effect */}
      <Iridescence
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
        className="absolute inset-0 -z-10 w-full h-full"
      />

      {/* Top Content - Apply AOS fade-up to the whole container
        The 'data-aos-once="true"' ensures the animation runs only once.
      */}
      <header 
        className="max-w-[900px] mx-auto text-center h-screen flex flex-col justify-center px-4"
        data-aos="fade-up" // Main animation for the whole content block
        data-aos-duration="800"
        data-aos-once="true" 
      >
        <h1 
          className="text-5xl md:text-6xl font-semibold text-white leading-[70px]"
          data-aos="fade-up" // Apply again to h1 for finer control/stagger
          data-aos-duration="800"
          data-aos-once="true" 
        >
          Grow your software{" "}
          <RotatingText
            texts={["Faster", "Easier", "Powerful"]}
            mainClassName="p-2 md:p-3 bg-[#F5C827] text-[#0361A6] rounded-xl inline-block"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000} // change every 2s
          />{" "}
          With Dashboard
        </h1>

        <p 
          className="text-white text-lg md:text-xl leading-[28px] md:leading-[30px] mt-6"
          data-aos="fade-up" // Animation for the paragraph
          data-aos-duration="800"
          data-aos-delay="200" // Staggered delay (appears after h1)
          data-aos-once="true" 
        >
          The World's simplest and fastest platform that brings everything
          together
        </p>

        <Link
          href="/contact-us"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white 
                    text-sm md:text-base bg-gradient-to-r from-orange-500 to-orange-600
                    hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg group mt-8 mx-auto"
          data-aos="fade-up" // Animation for the button
          data-aos-duration="800"
          data-aos-delay="400" // Staggered delay (appears after p)
          data-aos-once="true" 
        >
          Try It Now
          <span className="ml-2 transition-transform duration-300">
            {hovered ? (
              <ArrowRight className="h-5 w-5" />
            ) : (
              <ArrowUpRight className="h-5 w-5" />
            )}
          </span>
        </Link>
      </header>
    </div>
  );
};

export default Banner;