'use client';

import { motion } from 'motion/react';
import ButtonArrow from '@/app/ui-components/buttonarrow';
import { textVariants } from '@/app/lib/animations';
import Image from 'next/image';

export default function ValueInvesting() {
    return (
        <main className="flex flex-col mx-auto mt-20">
            <motion.h1
                className="font-bold lg:text-5xl text-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-xs mx-auto text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Value Investing?
            </motion.h1>

            {/* Text info */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 bg-emerald-400 py-10 mt-2 shadow-lg">
                <div className="flex items-center lg:max-w-5xl md:max-w-3xl sm:max-w-md max-w-xs mx-auto md:pl-12">
                    <div className="flex-1 lg:max-w-2xl text-left lg:text-xl text-lg text-black space-y-5 leading-relaxed">
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

                    <div className="hidden md:flex shrink-0 md:ml-10 lg:ml-28">
                        <Image src="/growth.svg" quality={100} width={200} height={200} alt={' '} />
                    </div>
                </div>
            </div>

            {/* Nav buttons */}
            <div className="md:gap-x-72 md:mt-20 mt-16 flex flex-row-reverse mx-auto gap-x-28 pb-28">
                <ButtonArrow
                    direction="next"
                    href="/company-info"
                    text={"Next"}
                />
                <ButtonArrow
                    direction="back"
                    href="/question-two"
                    text={"Back"}
                />
            </div>
        </main>
    )
}