"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#2480C2] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="/EMS" className="block mb-6">
              <Image
                src="/images/logo1.webp"
                alt="logo"
                width={150}
                height={50}
                className="w-auto h-10"
              />
            </a>
            <p className="leading-relaxed">
              The Electronic School Management System (eSM) is one of the most
              reliable school software ever offered in Pakistan. eSM is a
              multipurpose school management software that is trusted by several
              well known educational institutions across the country.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="/EMS" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/About" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="/Blog" className="hover:text-gray-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Offices</h3>
            <ul className="space-y-4">
              <li>
                <p>
                  <b>USA Office:</b> <br />
                  5900 Balcones Drive STE 7383 Austin TX, USA 78731
                </p>
              </li>
              <li>
                <p>
                  <b>Lahore Office:</b> <br />
                  33 B Wahdat Rd, Block B Muslim Town, Lahore, Punjab
                </p>
              </li>
              <li>
                <p>
                  <b>Karachi Office:</b> <br />
                  Regional Office: A-37, Saadabad Cooperative Housing Society,
                  Gulistan-e-Jauhar Block 5, Karachi, Sindh
                </p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <p>
                  <b>Call Us:</b> <br />
                  (042) 35442760
                </p>
              </li>
              <li>
                <p>
                  <b>Email Us:</b> <br />
                  info@cyberasol.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-20 z-[999] flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[0_0_12px_#45ABFB] cursor-pointer transition hover:scale-110"
        >
          <ArrowUp className="w-6 h-6 text-[#45ABFB]" />
        </button>
      )}
    </footer>
  );
}
