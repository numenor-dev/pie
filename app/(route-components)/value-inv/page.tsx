'use client';

import { motion } from 'motion/react';
import ButtonArrow from '@/app/ui-components/buttonarrow';
import { textVariants } from '@/app/lib/animations';

export default function ValueInvesting() {
    return (
        <main className="lg:max-w-7xl md:max-w-4xl max-w-xl flex flex-col mx-auto pt-16 md:pt-24">
            <motion.h1
                className="font-bold lg:text-5xl text-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-xs mx-auto text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Value Investing?
            </motion.h1>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="h-px lg:w-[37em] md:w-96 w-48 mt-2 mx-auto bg-linear-to-r from-transparent via-emerald-400 to-transparent"
            />

            {/* Text info */}
            <div className="flex items-center lg:max-w-5xl md:max-w-3xl sm:max-w-md max-w-xs mx-auto text-left mt-7">
                <div className="flex-1 lg:max-w-2xl text-left lg:text-xl text-lg space-y-5 leading-relaxed">
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        Value investing involves researching stocks that appear
                        to be trading for less than its book value
                        (total assets - total liabilities) or intrinsic value
                        (the true value of a company based on its financials and
                        growth potential). The stock market can overreact to news
                        about a company, resulting in stock price movements that do
                        not follow a company&apos;s long term fundamentals.
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        A classic example of a value investment is Berkshire Hathaway.
                        Even though the company was struggling as a textile manufacturer
                        in the 1960s, Warren Buffett saw that the stock was undervalued
                        compared to its assets on hand. By 1965, he owned 392,633 shares,
                        enough to own a controlling stake in the company. Buffett then
                        transformed Berkshire Hathaway into a holding company and invested
                        in many other undervalued companies. In 1962, the stock price was
                        $7.50 per share. Today, the stock price is over $700,000 per share.
                        Granted, this is an extreme example, possibly the most extreme example
                        of value investing success, but it illustrates the potential of
                        value investing when done correctly.
                    </motion.p>
                </div>

                <div className="hidden md:flex shrink-0 ml-12">
                    <svg
                        fill="#1abc71"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-56 h-56"
                    >
                        <path d="m98.8 207.7c9.6 10 8.9 20.2 8.9 27.8v20h-47.5v-8.4c0-5.5-1.1-9.1-5.4-13.1l-43.6-46.3a40.6 40.6 0 0 1 -9.7-26.3v-69.7a13.2 13.2 0 0 1 26.3 0v51h.1c-7 3.2-11.2 9.6-11.2 16.6a17.6 17.6 0 0 0 5.3 12.5l27 29.8a22.3 22.3 0 0 1 3.8 6.7 14.6 14.6 0 0 1 .6 4.9h8.6a26.1 26.1 0 0 0 -1-7.5 31.8 31.8 0 0 0 -6.1-10.5l-26.7-28.6a10.5 10.5 0 0 1 15.3-14.4zm142.1-129.1a13.2 13.2 0 0 0 -13.2 13.1v51a18.6 18.6 0 0 1 11.2 16.9 17.7 17.7 0 0 1 -5.3 12.5l-27.1 29.7a20.3 20.3 0 0 0 -3.8 6.7 17.7 17.7 0 0 0 -.6 4.9h-8.6a23.1 23.1 0 0 1 1-7.5 30.2 30.2 0 0 1 6.1-10.5l26.7-28.6a10.5 10.5 0 0 0 -15.3-14.4l-55.3 55.5c-9.5 10-8.9 20.2-8.9 27.8v20h47.4v-8.4c0-5.4 1.1-9 5.4-13.1l43.6-46.3a40.6 40.6 0 0 0 9.7-26.3v-69.9a13.1 13.1 0 0 0 -13-13.1zm-174.3 26.7c13.3 12.2 39.2 9.2 48 10.6 9.2 13.4 9.8 16.1 12.8 21.7l3.1-17.3c-3.7-4.4-8.5-8-15.3-14.8-4.2-9.9-9-28.8-19.2-38.2-16.4-14.7-41.3-9.9-43.5-10.5s-2.3 33.8 14.1 48.5zm100.7 53.2a1.4 1.4 0 0 0 -1.4-1.4h-20.6a1.3 1.3 0 0 1 -1.4-1.5c2-14.9 3.5-31.7 7.5-49.4 1.8-8 5.4-16.3 9.5-21.3a1.4 1.4 0 0 1 1.7-.4c14.3 7.1 33.6 2 45.8-13.2s12.1-56 11.9-66.7a1.4 1.4 0 0 0 -2.1-1.2 67.1 67.1 0 0 1 -24.4 9.7c-15.6 3.2-29.9 6.9-37.6 16.4-11.1 13.9-12.8 31.8-5.3 44.2a1.4 1.4 0 0 0 2.4-.1c5.4-9.9 16.9-19.8 26.2-26.7a1.4 1.4 0 0 1 1.8 2.1c-15.1 14.2-29.7 27.1-38.7 54.3-3.7 11.3-5 15.9-8.4 35.7 0 0-1 5.6-1.3 7.1l-1.8 10a1.4 1.4 0 0 1 -1.3 1.1h-34.8a1.4 1.4 0 0 0 -1.4 1.4 36.7 36.7 0 0 0 36.8 34.9c19.9-.1 36.1-15.6 36.9-35z" />
                    </svg>
                </div>

            </div>
            {/* Nav buttons */}
            <div className="md:gap-x-72 md:mt-20 mt-16 flex flex-row-reverse mx-auto gap-x-36 pb-28">
                <ButtonArrow
                    direction="next"
                    href="/company-info"
                />
                <ButtonArrow
                    direction="back"
                    href="/question-two"
                />
            </div>
        </main>
    )
}