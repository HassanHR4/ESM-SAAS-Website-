"use client";
import Image from "next/image";
import Aurora from "@/components/ui/Aurora";
import { SlidingNumber } from "@/components/ui/Sliding-number";
import { motion } from "framer-motion";


export default function PowerfulSolution() {
  // Hover list data
  const features = [
    { text: "Highly Customizable", icon: "/images/check2.webp" },
    { text: "Highly Secure", icon: "/images/check2.webp" },
    { text: "Worldwide Support", icon: "/images/check2.webp" },
  ];

  // Counter data using numbers for SlidingNumber component
  const counters = [
    { value: 500, suffix: '+', label: 'Campuses' },
    { value: 200, suffix: '+', label: 'Schools' },
    { value: 500000, suffix: '+', label: 'Students' },
    { value: 20000, suffix: '+', label: 'Active Staff' },
  ];

  const gallery = [
    [
      { src: "/images/Powerful-solution-01.webp", alt: "Powerful solution1" },
      { src: "/images/Powerful-solution-02.webp", alt: "Powerful solution2" },
    ],
    [
      { src: "/images/Powerful-solution-03.webp", alt: "Powerful solution3" },
      { src: "/images/Powerful-solution-04.webp", alt: "Powerful solution4" },
      { src: "/images/Powerful-solution-05.webp", alt: "Powerful solution5" },
    ],
    [
      { src: "/images/Powerful-solution-06.webp", alt: "Powerful solution6" },
      { src: "/images/Powerful-solution-07.webp", alt: "Powerful solution7" },
    ],
    [
      { src: "/images/Powerful-solution-08.webp", alt: "Powerful solution8" },
      { src: "/images/Powerful-solution-09.webp", alt: "Powerful solution9" },
    ],
  ];
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <div className="relative bg-[#17233D] w-full h-[1600px] overflow-hidden ">

      {/* Aurora Background */}
      <Aurora
        colorStops={["#DDC136", "#66A1B6", "#DDC136"]}
        blend={0.5}
        amplitude={1.3}
        speed={0.5}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 space-y-12">

        {/* Main Text Block */}
        <div className="p-16 mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Powerful solution for your Schools
          </h1>
          <p className="mx-auto text-lg md:text-xl mt-6 text-white/90 drop-shadow-md">
            This software makes school management simple and efficient. From handling
            student enrollments to managing staff, our platform is designed to make
            your daily tasks easier and more organized. With easy-to-use features and
            a seamless system, this tool helps your school run smoothly and achieve its
            goals.
          </p>
        </div>

        {/* Hover List */}
        <div className="flex flex-wrap justify-center gap-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 border rounded-full cursor-pointer text-lg font-medium 
                          text-white border-white/20 
                          bg-white/5 backdrop-blur-sm 
                          hover:bg-gradient-to-r hover:from-[#237EFD] hover:to-[#24E2FF] hover:text-white
                          hover:scale-105 hover:shadow-lg 
                          transition-all duration-300 ease-in-out"
            >
              <Image
                src={item.icon}
                alt="Check"
                width={20}
                height={20}
                className="shrink-0"
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Counters - Now uses SlidingNumber component */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
          {counters.map((counter, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300 text-white"
            >
              <div className="flex items-center">
                <SlidingNumber
                  from={0}
                  to={counter.value}
                  duration={2}
                  className="text-4xl font-extrabold drop-shadow-md"
                  digitHeight={40}
                />
                <span className="text-4xl font-extrabold drop-shadow-md">
                  {counter.suffix}
                </span>
              </div>
              <p className="font-semibold text-white/80">{counter.label}</p>
            </div>
          ))}
        </div>

        {/* Masonry Gallery Container
        <div className="w-full max-w-7xl pt-12 pb-24 h-[800px]">
          <Masonry
            items={gallery}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div> */}

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((col, colIndex) => (
              <motion.div
                key={colIndex}
                variants={fadeUp(colIndex * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col ${colIndex === 0 ? "mt-12" : ""
                  } space-y-6`}
              >
                {col.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}