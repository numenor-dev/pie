'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';
import Link from "next/link";

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
                    <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            d="M6.22209 4.60105C6.66665 4.304 7.13344 4.04636 7.6171 3.82976C8.98898 3.21539 9.67491 2.9082 10.5875 3.4994C11.5 4.09061 11.5 5.06041 11.5 7.00001V8.50001C11.5 10.3856 11.5 11.3284 12.0858 11.9142C12.6716 12.5 13.6144 12.5 15.5 12.5H17C18.9396 12.5 19.9094 12.5 20.5006 13.4125C21.0918 14.3251 20.7846 15.011 20.1702 16.3829C19.9536 16.8666 19.696 17.3334 19.399 17.7779C18.3551 19.3402 16.8714 20.5578 15.1355 21.2769C13.3996 21.9959 11.4895 22.184 9.64665 21.8175C7.80383 21.4509 6.11109 20.5461 4.78249 19.2175C3.45389 17.8889 2.5491 16.1962 2.18254 14.3534C1.81598 12.5105 2.00412 10.6004 2.72315 8.86451C3.44218 7.12861 4.65982 5.64492 6.22209 4.60105Z" fill="#1C274C"></path> <path d="M21.446 7.06901C20.6342 5.00831 18.9917 3.36579 16.931 2.55398C15.3895 1.94669 14 3.34316 14 5.00002V9.00002C14 9.5523 14.4477 10 15 10H19C20.6569 10 22.0533 8.61055 21.446 7.06901Z"
                                fill="#1C274C">
                        </path>
                    </svg>
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