'use client';

import { motion } from 'motion/react';
import ButtonArrow from '@/app/ui-components/buttonarrow';

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: index * 0.2
        }
    })
};

export default function ValueInvesting() {

    return (
        <div className="lg:max-w-7xl md:max-w-4xl max-w-xl flex flex-col mx-auto mt-32">
            <motion.h1
                className="font-bold lg:text-6xl text-4xl mx-auto px-5 text-center"
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
                className="h-px lg:w-[40em] w-56 md:mt-4 mt-3 mx-auto bg-linear-to-r from-transparent via-emerald-400 to-transparent"
            />

            {/* Text info */}
            <div className="lg:text-xl lg:max-w-3xl md:max-w-2xl sm:mx-auto mx-12 text-left text-lg md:mt-10 mt-5 space-y-7 leading-relaxed">
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

            <div className="md:gap-x-96 md:mt-20 mt-16 flex flex-row-reverse mx-auto gap-x-40 pb-32">
                <ButtonArrow
                    direction="next"
                    href="/company-info"
                />

                <ButtonArrow
                    direction="back"
                    href="/question-two"
                />
            </div>
        </div>
    )
}