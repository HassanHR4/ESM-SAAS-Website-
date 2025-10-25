"use client";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'


const cards = [
    {
        icon: "/images/mail (1).webp",
        alt: "mail icon",
        title: "Chat To Sales",
        desc: "Let’s discuss with our sales team",
        link: "mailto:info@cyberasol.com",
        text: "info@cyberasol.com",
        dotColor: "#3CB1F6",
    },
    {
        icon: "/images/location (1).webp",
        alt: "location icon",
        title: "Visit Our Office",
        desc: "Reach Us To Our Office And Meet Us",
        link: "#loactionMap",
        text: "33 B Wahdat Rd, Block B Muslim Town, Lahore, Punjab 54000",
        dotColor: "#F8563B",
    },
    {
        icon: "/images/phone (1).webp",
        alt: "phone icon",
        title: "Call Us",
        desc: "Call Us Directly With Sales Team",
        link: "tel:+924235442760",
        text: "(042) 35442760",
        dotColor: "#38DF72",
    },
];
const contactPage = () => {
    const [form, setForm] = useState({
        name: "",
        designation: "",
        school_name: "",
        city: "",
        district: "",
        email: "",
        phone: "",
        number_of_students: "",
        system: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log("Form submitted:", form);
            setStatus("success");
        } catch (err) {
            setStatus("error");
        }
    };
    return (
        <Head>
            <title>Contact Us</title>
            <meta
                name="description"
                content="Get in touch with the ESM Software team for inquiries, support, or more information about our products and services."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>,
        <div className="bg-white">
            <Header />
            <div
                className="relative z-10 h-[500px]  bg-center bg-no-repeat bg-cover overflow-hidden"
                style={{ backgroundImage: "url('/images/contact-bg.webp')" }}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold text-white leading-[50px] mb-5">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between gap-8 mt-10">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className="flex-1 max-w-sm bg-white shadow-md rounded-[31px] p-10 text-center transition duration-300 hover:shadow-xl"
                            >
                                {/* Icon with animated dots */}
                                <div className="relative inline-block mb-6">
                                    <Image
                                        src={card.icon}
                                        alt={card.alt}
                                        width={100}
                                        height={100}
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                        {[...Array(3)].map((_, j) => (
                                            <span
                                                key={j}
                                                className="w-2 h-2 rounded-full animate-pulse"
                                                style={{ backgroundColor: card.dotColor }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="mb-2 text-[#0361A6] font-semibold text-xl">{card.title}</h3>
                                    <p className="text-gray-600 text-base mb-4">{card.desc}</p>
                                    <a
                                        href={card.link}
                                        className="font-bold text-[#0361A6] hover: transition-colors duration-300"
                                    >
                                        {card.text}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 bg-[#fbfbfd]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Info */}
                        <div className="lg:col-span-3 space-y-8">
                            <div className="border-b border-gray-200 pb-6">
                                <h6 className="text-xl font-medium text-gray-800 mb-3">Office Address</h6>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    33 B Wahdat Rd, Block B Muslim Town, Lahore, Punjab 54000
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <h6 className="text-xl font-medium text-gray-800 mb-3">Contact Info</h6>
                                <p className="text-gray-600 text-sm mb-2">
                                    <span className="font-medium text-gray-800">Phone:</span>{" "}
                                    <a href="tel:04235442760" className="text-[#0361A6] hover:underline">
                                        (042) 35442760
                                    </a>
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-medium text-gray-800">Email:</span>{" "}
                                    <a href="mailto:info@cyberasol.com" className="text-[#0361A6] hover:underline">
                                        info@cyberasol.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-8 lg:col-start-5">
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-8"
                            >
                                {/* Full Name */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                                {/* Designation */}
                                <select
                                    name="designation"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800 text-sm"
                                    value={form.designation}
                                    onChange={handleChange}
                                >
                                    <option>Designation</option>
                                    <option value="Principal">Principal</option>
                                    <option value="Administrator">Administrator</option>
                                    <option value="Owner">Owner</option>
                                </select>

                                {/* School Name */}
                                <input
                                    type="text"
                                    name="school_name"
                                    placeholder="School Name"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                    value={form.school_name}
                                    onChange={handleChange}
                                    required
                                />

                                {/* City */}
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                    value={form.city}
                                    onChange={handleChange}
                                />

                                {/* District */}
                                <input
                                    type="text"
                                    name="district"
                                    placeholder="District"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                    value={form.district}
                                    onChange={handleChange}
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                {/* Phone */}
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                    value={form.phone}
                                    onChange={handleChange}
                                />

                                {/* Number of Students */}
                                <select
                                    name="number_of_students"
                                    className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800 text-sm"
                                    value={form.number_of_students}
                                    onChange={handleChange}
                                >
                                    <option>Number of Students</option>
                                    <option value="less_than_100">Less than 100</option>
                                    <option value="100_500">100-500</option>
                                    <option value="500_1000">500-1000</option>
                                    <option value="1000_plus">1000+</option>
                                </select>

                                {/* Current System */}
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        name="system"
                                        placeholder="Current Management System Used (if any)"
                                        className="w-full h-14 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                        value={form.system}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2">
                                    <textarea
                                        name="message"
                                        placeholder="Enter Your Message . . ."
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-800"
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
                                    >
                                        SEND MESSAGE →
                                    </button>
                                </div>
                            </form>

                            {/* Notifications */}
                            {status === "success" && (
                                <div className="mt-4 text-green-600 font-semibold">
                                    ✅ Your message successfully sent!
                                </div>
                            )}
                            {status === "error" && (
                                <div className="mt-4 text-red-600 font-semibold">
                                    ❌ Oops! Something went wrong. Please try again.
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <div id="locationMap" className="relative w-full h-[600px] bg-[#fbfbfd]">
                <div className="container mx-auto h-full px-4">
                    <div className="w-full h-[510px] rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.572079583886!2d74.31982917506879!3d31.508444047732215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190535c18be70b%3A0x158c5a43bad5fe8b!2sCyber%20Advance%20Solutions!5e0!3m2!1sen!2s!4v1716558849290!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default contactPage