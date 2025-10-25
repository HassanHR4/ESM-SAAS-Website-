"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavLinks = [
    { name: 'Home', href: '/EMS.html' },
    { name: 'About', href: '/About.html' },
    { name: 'Blog', href: '/Blog.html' },
    { name: 'Contact', href: '/Contact.html' },
];

const Navbar = () => {
    // Keep isMenuOpen for the mobile hamburger menu functionality
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Removed the isScrolled state and the useEffect hook for scroll handling.

    const navbarClasses = `
        absolute w-full z-20 
        py-4
        // The navbar will now always have the transparent background
        // You can change 'bg-transparent' to a solid color if needed
        bg-transparent
    `;

    // Links will now have a fixed color, which should be the 'initial' color
    // that was previously used before scrolling.
    const linkColor = 'text-white hover:text-gray-300';


    return (
        <header className="relative z-20">
            <nav className={navbarClasses}>
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/">
                        <div className="cursor-pointer">
                            <Image
                                src="/images/logo.webp"
                                alt="Logo"
                                width={160}
                                height={40}
                            />
                        </div>
                    </Link>

                    {/* The mobile menu button's colors (text-white border border-white) 
                    are kept for contrast against the current transparent background. 
                    If you change the navbar background, you might need to update these. */}
                    <button
                        className="lg:hidden p-2 text-white border border-white rounded focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <div
                        className={`
                            w-full lg:flex lg:items-center lg:w-auto 
                            ${isMenuOpen ? 'block' : 'hidden'} 
                            mt-4 lg:mt-0 
                            // Mobile menu background is kept as gray-800 for contrast
                            absolute top-full left-0 bg-gray-800 lg:bg-transparent lg:static
                            lg:shadow-none shadow-lg
                        `}
                        id="navbarNav"
                    >
                        <ul className="flex flex-col lg:flex-row lg:ml-auto">
                            {NavLinks.map((link) => (
                                <li key={link.name} className="mx-0 lg:mx-2 py-2 lg:py-0 border-b lg:border-none border-gray-700">
                                    <Link href={link.href} passHref>
                                        <span
                                            className={`block text-lg font-medium p-2 transition-colors ${linkColor}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;