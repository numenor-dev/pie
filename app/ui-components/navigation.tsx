'use client';

import HomeButton from "./home-button";
import Link from "next/link";


export default function Navigation() {
    return (
        <nav className="hidden fixed top-0 left-0 right-0 z-50 md:flex items-center justify-between sm:px-10 py-4 backdrop-blur-md bg-white/10 border-b border-white/10">

            <HomeButton />

            <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-8">
                <Link
                    href="https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-emerald-600 transition-colors duration-200"
                    aria-label="Investing 101"
                >
                    Investing 101
                </Link>
                <Link
                    href="https://www.investopedia.com/ask/answers/032615/what-difference-between-covered-call-and-regular-call.asp"
                    className="text-sm font-medium hover:text-emerald-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Call Options"
                >
                    Call Options
                </Link>
            </div>
            <Link
                href="https://github.com/numenor-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors duration-200 sm:mr-0 mr-14"
                aria-label="GitHub"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            </Link>
        </nav>
    )
}