import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

// Section data
const aboutIntro = {
    title: "About us",
    description: `Welcome to eSM, where expertise meets innovation in school management
  software solutions. At eSM, we understand the complexities of school
  administration and the importance of seamless communication between
  stakeholders. Our cutting-edge software is meticulously crafted to
  streamline administrative tasks, optimize academic processes, and
  enhance overall efficiency. From student enrollment and attendance
  tracking to grade management and parent communication, eSM offers a
  comprehensive suite of features designed to meet the unique
  requirements of modern educational institutions.`,
    bgImg: "/images/Img-03.webp",
}

const aboutDetails = {
    image: "/images/education.webp",
    title: "eSM - Your Trusted Partner in School Management Software",
    paragraphs: [
        `With a rich history of 16 years serving prestigious institutions such as Karachi Garrison Education,
    Lahore Garrison Education, DHA Education, Akhuwat Foundation Sindh Region, Unique Group of Institutions,
    IJK Karachi, St. Anthony Schools Sharif Educational Complex, Leads Group of Colleges and many more,
    we are proud to be your go-to provider for all your educational software needs.`,
        `Experience the eSM difference today and unlock the full potential of your institution. Join hands with
    us and embark on a journey towards streamlined operations, enhanced communication, and academic excellence.
    Thank you for considering eSM as your trusted partner in school management software. Let's work
    together to shape a brighter future for your institution.`,
    ],
}

const serviceSection = {
    title: "eSM - Your Trusted Partner in School Management Software",
    description: `Manage your school on a single click the way you want. eSM has
  such features that are enough to incorporate with all departments
  of a school. Our school software is guaranteed with a powerful,
  time saving, efficient, more productive, and reliable system.`,
    services: [
        {
            id: 1,
            img: "/images/solution_1.webp",
            title: "Consistently Working",
            desc: "Our developers are working continuously to produce the best results. We are trying to make our school software more efficient and reliable with time.",
        },
        {
            id: 2,
            img: "/images/solution_2.webp",
            title: "Affordable Pricing",
            desc: "There is no issue with the price while using electronic school management system. We have different packages as you can afford.",
        },
    ],
    video: {
        img: "/images/solution.webp",
        link: "https://youtu.be/vhHNvasGY9w",
    },
}

const featuresSection = {
    title: "eSM Features",
    description: `What sets us apart is our unwavering commitment to excellence. Our
  dedicated team strives for customer satisfaction, continuous
  improvement, and innovation. With eSM, you gain not just software
  but a strategic partner for your school’s growth.`,
    features: [
        {
            id: 1,
            img: "/images/it_solution_01.webp",
            title: "User Friendly Design",
            desc: "We develop a user-friendly interface that is eye-catching and easy to use with a dynamic dashboard. We believe in maintaining quality, not quantity.",
        },
        {
            id: 2,
            img: "/images/it_solution_02.webp",
            title: "24x7 Customer Support",
            desc: "Our school software is available 24/7. We deliver the best customer experience with customized solutions to meet your needs.",
        },
        {
            id: 3,
            img: "/images/it_solution_03.webp",
            title: "Easy Backup Option",
            desc: "Our system is designed with a reliable backup module, so you can securely store and restore your data as needed.",
        },
        {
            id: 4,
            img: "/images/it_solution_04.webp",
            title: "Wide Range Of Features",
            desc: "Our solution includes multiple modules that manage workload efficiently and save time.",
        },
        {
            id: 5,
            img: "/images/it_solution_04.webp",
            title: "Consistently Working",
            desc: "Our developers continuously improve eSM, making it more efficient and reliable over time.",
        },
        {
            id: 6,
            img: "/images/it_solution_03.webp",
            title: "Affordable Pricing",
            desc: "We provide different packages so you can choose the modules that suit your work without financial burden.",
        },
        {
            id: 7,
            img: "/images/it_solution_02.webp",
            title: "Secure Cloud Host",
            desc: "eSM runs on secure cloud hosting, giving you reliable access to your data anytime, anywhere.",
        },
        {
            id: 8,
            img: "/images/it_solution_01.webp",
            title: "Mobile Application",
            desc: "Alongside desktop, we provide an Android app to make management faster, easier, and accessible on the go.",
        },
    ],
}
const statsData = [
    { value: '500+', label: 'Campuses', color: 'text-amber-500', background: 'bg-white', text: 'text-gray-800' },
    { value: '200+', label: 'Schools', color: 'text-amber-500', background: 'bg-white', text: 'text-gray-800' },
    { value: '500K+', label: 'Students', color: 'text-amber-500', background: 'bg-white', text: 'text-gray-800' },
    { value: '20K+', label: 'Active Staff', color: 'text-amber-500', background: 'bg-white', text: 'text-gray-800' },
];

// Page
const AboutPage = () => {
    <Head>
                <title>About Us</title>
                <meta
                    name="description"
                    content="Get in touch with the ESM Software team for inquiries, support, or more information about our products and services."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    return (
        <div>
            <Header />

            {/* Intro Section */}
            <div
                className="relative bg-cover bg-no-repeat text-white py-16 lg:py-24"
                style={{ backgroundImage: `url(${aboutIntro.bgImg})` }}
            >
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-white text-5xl font-bold leading-tight mb-6">
                            {aboutIntro.title}
                        </h1>
                        <p className="text-white text-base leading-7 font-normal">
                            {aboutIntro.description}
                        </p>
                    </div>
                </div>
            </div>


            {/* Details Section */}
            <div className="relative bg-[#f5f7fb] min-h-[720px] h-screen flex items-center py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <Image
                                src={aboutDetails.image}
                                alt="Education"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-semibold leading-snug text-[#075385] mb-6">
                                {aboutDetails.title}
                            </h2>
                            {aboutDetails.paragraphs.map((para, idx) => (
                                <p key={idx} className="text-lg text-gray-600 leading-relaxed mb-6">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-20 pt-10 bg-[#f5f7fb] flex justify-center items-center">
                <div className="container px-4">
                    {/* The grid layout to display the four cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                className={`
                ${stat.background} 
                rounded-xl p-8 shadow-xl transition-all duration-300
                transform hover:scale-[1.02]
              `}
                                // Applying a slight elevation and rounded corners matching the image
                                style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', borderRadius: '1rem' }}
                            >
                                {/* Statistic Value */}
                                <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 ${stat.color}`}>
                                    {stat.value}
                                </h2>

                                {/* Label */}
                                <p className={`text-lg font-semibold ${stat.text}`}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-[#23026d] to-[#3d64f4] flex items-center py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-snug mb-6">
                                {serviceSection.title}
                            </h2>
                            <p className="text-lg text-white/90 leading-relaxed mb-8">
                                {serviceSection.description}
                            </p>
                            <ul className="space-y-8">
                                {serviceSection.services.map((service) => (
                                    <li key={service.id} className="flex items-start gap-4">
                                        <Image
                                            src={service.img}
                                            alt={service.title}
                                            width={60}
                                            height={60}
                                            className="flex-shrink-0 rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-white/80 mt-2">{service.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-center">
                            <Link
                                href={serviceSection.video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={serviceSection.video.img}
                                    alt="Watch Video"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#fbfbfd] py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl font-semibold text-[#075385] mb-6">
                            {featuresSection.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {featuresSection.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuresSection.features.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <div className="w-14 h-14 mb-5">
                                    <Image
                                        src={feature.img}
                                        alt={feature.title}
                                        width={56}
                                        height={56}
                                        className="object-contain"
                                    />
                                </div>
                                <h5 className="text-lg font-semibold text-[#2c2c51] mb-3">
                                    {feature.title}
                                </h5>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage
