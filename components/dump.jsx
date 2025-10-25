"use client";
import Image from "next/image";
import Aurora from "@/components/ui/Aurora";
import Masonry from "@/components/ui/Masonry";


export default function PowerfulSolution() {
  // Hover list data
  const features = [
    { text: "Highly Customizable", icon: "/images/check2.webp" },
    { text: "Highly Secure", icon: "/images/check2.webp" },
    { text: "Worldwide Support", icon: "/images/check2.webp" },
  ];

  // Counter data
  const counters = [
    { value: "500+", label: "Campuses" },
    { value: "200+", label: "Schools" },
    { value: "500,000+", label: "Students" },
    { value: "20,000+", label: "Active Staff" },
  ];

  // Gallery images data (This data is not used in the JSX below, but kept for completeness)
  const gallery = [
      { src: "/images/Powerful-solution-01.webp", alt: "Powerful solution 1", id: '01' },
      { src: "/images/Powerful-solution-02.webp", alt: "Powerful solution 2", id: '02' },
      { src: "/images/Powerful-solution-03.webp", alt: "Powerful solution 3", id: '03' },
      { src: "/images/Powerful-solution-04.webp", alt: "Powerful solution 4", id: '04' },
      { src: "/images/Powerful-solution-05.webp", alt: "Powerful solution 5", id: '05' },
      { src: "/images/Powerful-solution-06.webp", alt: "Powerful solution 6", id: '06' },
      { src: "/images/Powerful-solution-07.webp", alt: "Powerful solution 7", id: '07' },
      { src: "/images/Powerful-solution-08.webp", alt: "Powerful solution 8", id: '08' },
      { src: "/images/Powerful-solution-09.webp", alt: "Powerful solution 9", id: '09' },
  ];

  return (
    // Applied the dark background color and ensured full viewport height
    <div className="relative bg-[#17233D] w-full h-[1500px] overflow-hidden "> 
      
      {/* Aurora Background */}
      <Aurora
        colorStops={["#DDC136", "#66A1B6", "#DDC136"]}
        blend={0.5}
        amplitude={1.3}
        speed={0.5}
      />

      {/* Content Overlay - Changed 'justify-center' to 'flex-col' and added padding.
        The layout is now centered vertically and content flows top-to-bottom.
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 space-y-12">
        
        {/* Main Text Block */}
        <div className="max-w-4xl pt-16"> 
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
            Powerful solution for your Schools
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 drop-shadow-md">
            This software makes school management simple and efficient. From handling
            student enrollments to managing staff, our platform is designed to make
            your daily tasks easier and more organized. With easy-to-use features and
            a seamless system, this tool helps your school run smoothly and achieve its
            goals.
          </p>
        </div>

        {/* Hover List (MOVED INSIDE OVERLAY) */}
        <div className="flex flex-wrap justify-center gap-4">
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
                width={20} // Reduced size for better fit
                height={20}
                className="shrink-0"
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Counters (MOVED INSIDE OVERLAY) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300 text-white"
            >
              <h2 className="text-4xl font-extrabold drop-shadow-md">{counter.value}</h2>
              <p className="font-semibold text-white/80">{counter.label}</p>
            </div>
          ))}
        </div>

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
        
      {/* End of Content Overlay */}
      </div>
    </div>
  );
}    // <div
    //   className="relative bg-cover bg-no-repeat text-white lg:py-24">
    //   <Aurora
    //     colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
    //     blend={0.5}
    //     amplitude={1.2}
    //     speed={0.5}
    //   />
    //   <div className="container mx-auto text-center px-6">
        

        // {/* Hover List */}
        // <div className="flex flex-wrap justify-center gap-4 mb-12">
        //   {features.map((item, i) => (
        //     <div
        //       key={i}
        //       className="flex items-center gap-3 px-6 py-3 border rounded-full cursor-pointer text-lg font-medium 
        //            bg-white/5 backdrop-blur-sm 
        //            hover:bg-gradient-to-r hover:from-[#237EFD] hover:to-[#24E2FF] hover:text-white
        //            hover:scale-105 hover:shadow-lg 
        //            transition-all duration-300 ease-in-out"
        //     >
        //       <Image
        //         src={item.icon}
        //         alt="Check"
        //         width={30}
        //         height={30}
        //         className="shrink-0"
        //       />
        //       <span>{item.text}</span>
        //     </div>
        //   ))}
        // </div>

    //     {/* Counters */}
        // <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        //   {counters.map((counter, i) => (
        //     <div key={i} className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
        //       <h2 className="text-4xl font-extrabold">{counter.value}</h2>
        //       <p className="font-semibold">{counter.label}</p>
        //     </div>
        //   ))}
        // </div>

        // {/* Gallery */}
        // <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        //   {gallery.map((col, colIndex) => (
        //     <div key={colIndex} className="flex flex-col gap-4">
        //       {col.map((img, imgIndex) => (
        //         <Image
        //           key={imgIndex}
        //           src={img.src}
        //           alt={img.alt}
        //           width={400}
        //           height={300}
        //           className="rounded-lg"
        //         />
        //       ))}
        //     </div>
        //   ))}
        // </div>
    //   </div>
    // </div>

