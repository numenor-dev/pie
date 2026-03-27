'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';
import Link from "next/link";
import Image from "next/image";

export default function MobileNavigation() {

    const [isOpen, setIsOpen] = useState<boolean>(false);


    const handleClick = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 760) setIsOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className="relative flex items-center h-14">
            <button
                className="md:hidden flex-1 cursor-pointer pl-5 pt-3 rounded-lg"
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
            >
                {isOpen ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                    :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                }
            </button>
            <div className="md:hidden flex-1 flex justify-center pt-2 pr-3">
                <Link href="/">
                    <Image src="/pie.svg" quality={100} width={33} height={33} alt={' '} />
                </Link>
            </div>

            <div className="md:hidden flex-1" />

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        id="mobile-nav"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-full pb-5 bg-stone-50 border-b border-l border-r border-stone-300 rounded-lg z-50"
                    >
                        <div className="flex flex-col pl-9 pt-3 gap-8">
                            <Link
                                href="https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-medium hover:text-emerald-500 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Investing 101
                            </Link>
                            <Link
                                href="https://www.investopedia.com/ask/answers/032615/what-difference-between-covered-call-and-regular-call.asp"
                                className="text-base font-medium hover:text-emerald-500 transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                            >
                                Call Options
                            </Link>

                            <Link
                                href="https://github.com/numenor-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base hover:text-emerald-500 transition-colors duration-200"
                                aria-label="GitHub"
                                onClick={() => setIsOpen(false)}
                            >
                                Github
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}