"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function Header() {
    const [top, setTop] = useState<boolean>(true);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header className="fixed top-2 z-30 w-full md:top-6">

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    <div className="flex flex-1 items-center">
                        <Logo/>
                    </div>
                    <ul className="hidden lg:flex flex-1 grow  gap-14 text-sm text-gray-800">
                        <li className="cursor-pointer">
                            Features
                        </li>
                        <li className="cursor-pointer">
                            Pricing
                        </li>
                        <li className="cursor-pointer">
                            Support
                        </li>
                        <li className="cursor-pointer">
                            Support
                        </li>
                        <li className="cursor-pointer">
                            Support
                        </li>
                    </ul>
                    <ul className="flex flex-1 items-center justify-end gap-3">
                        <li>
                            <Link
                                href="/signin"
                                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                            >
                                Donate
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/signup"
                                className="btn-sm bg-blue-600 text-white shadow hover:bg-blue-900"
                            >
                                Register
                            </Link>
                        </li>
                        <li className="block lg:hidden">
                            <button type="button"
                                    className="hs-collapse-toggle flex items-center"
                                    id="hs-navbar-header-floating-collapse" aria-expanded="false"
                                    aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation"
                                    data-hs-collapse="#hs-navbar-header-floating">
                                <svg className="hs-collapse-open:hidden"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 7H19M5 12H19M5 17H19"
                                        stroke="#000000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <svg className="hs-collapse-open:block hidden"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 5L19 19M5 19L19 5"
                                        stroke="#000000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </button>
                        </li>
                    </ul>

                </div>
            </div>
            <div id="hs-navbar-header-floating"
                 className="bg-white md:block hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow "
                 aria-labelledby="hs-navbar-header-floating-collapse">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                    <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200"
                       href="#" aria-current="page">Home</a>
                    <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
                       href="#">Projects</a>
                    <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
                       href="#">Work</a>
                    <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
                       href="#">Articles</a>
                </div>
            </div>
        </header>
    );
}