import Image from "next/image";
import CardSwap, { Card } from "@/components/ui/CardSwap";

export default function FreeTrial() {
  const benefits = [
    "Free 14-day trial",
    "No credit card required",
    "Support 24/7",
    "Cancel anytime",
  ];

  const CARD_WIDTH = 550;
  const CARD_HEIGHT = 350;

  return (
    <div className="bg-gradient-to-tr from-[#66A1B6] via-[#17233D] to-[#66A1B6] py-16 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side Content */}
        <div className="flex-1 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Start Your 1 Month Free Trial
          </h1>
          <p className="text-white text-lg md:text-xl my-6">
            Manage your school on a single click the way you want. eSM has such
            features that are enough to incorporate with all departments of a
            school.
          </p>

          {/* Benefits List */}
          <ul className="space-y-3 mb-8">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center text-white text-lg md:text-xl">
                <Image
                  src="/images/check1.webp"
                  alt="Check"
                  width={24}
                  height={24}
                  className="mr-3 filter brightness-0 invert  "
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="rounded-full px-6 py-2 font-semibold cursor-pointer text-white bg-[rgb(255,115,0)] border border-[rgb(255,115,0)] transition duration-300 hover:bg-orange-600">
            Get Started
          </button>
        </div>

        {/* Right Side Image / Cards */}
        <div className="flex-1 flex justify-center lg:justify-end mt-8">
          <div>
            <CardSwap
            cardWidth={CARD_WIDTH}
              cardHeight={CARD_HEIGHT}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <Image
                  src="/images/firstOverview.webp"
                  alt="Free Trial"
                  
                  fill
                  className="rounded-lg w-full h-full"
                />
              </Card>
              <Card>
                <Image
                  src="/images/secondOverview.webp"
                  alt="Free Trial"
                  
                  fill
                  className="rounded-lg w-full h-full"
                />
              </Card>
              <Card>
                <Image
                  src="/images/thirdOverview.webp"
                  alt="Free Trial"
                  
                  fill
                  className="rounded-lg w-full h-full"
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>

  );
}

{/* <Image
            src="/images/start-free-side-img.webp"
            alt="Free Trial"
            width={500}
            height={400}
            className="rounded-lg"
          /> */}