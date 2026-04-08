'use client';

import { motion } from 'motion/react';
import ButtonArrow from '@/app/ui-components/buttonarrow';
import { textVariants } from '@/app/lib/animations';
import Image from 'next/image';

export default function ValueInvesting() {
    return (
        <main className="flex flex-col pt-8">

            {/* Full width banner */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 bg-emerald-700 py-16 md:py-20">
                <div className="flex items-start gap-12 lg:gap-16 lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto px-6 md:px-0">

                    <div className="flex-1">
                        <motion.p
                            className="text-emerald-300 text-xs font-medium tracking-widest uppercase mb-4"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        >
                            Step 4 of 4
                        </motion.p>

                        <motion.h1
                            className="font-bold text-4xl lg:text-5xl text-white leading-tight mb-8"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                        >
                            What is Value Investing?
                        </motion.h1>

                        <div className="text-emerald-100 text-base lg:text-lg leading-relaxed space-y-5">
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                            >
                                Value investing involves finding stocks trading below their
                                book value (total assets minus liabilities) or intrinsic value
                                (the true worth based on financials and growth potential). The
                                market can overreact to news, creating price movements that
                                don&apos;t reflect a company&apos;s long-term fundamentals —
                                and that gap is the opportunity.
                            </motion.p>
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                            >
                                The classic example is Berkshire Hathaway. In the 1960s,
                                Warren Buffett recognized the stock was undervalued relative
                                to its assets and acquired a controlling stake at $7.50 per
                                share. He transformed it into a holding company and applied
                                the same logic to many other undervalued businesses. Today,
                                that share trades at over $700,000 — an extreme case, but one
                                that illustrates the potential when value investing is done right.
                            </motion.p>
                        </div>
                    </div>

                    <div className="hidden md:flex shrink-0 bg-black/20 rounded-full p-6 mt-2">
                        <Image src="/growth.svg" quality={100} width={160} height={160} alt="" />
                    </div>

                </div>
            </div>

            {/* Nav buttons */}
            <div className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto w-full px-6 md:px-0 flex justify-between mt-12 pb-24">
                <ButtonArrow direction="back" href="/question-two" text="Back" />
                <ButtonArrow direction="next" href="/company-info" text="Next" />
            </div>

        </main>
    );
}