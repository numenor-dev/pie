'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../../ui-components/buttonarrow';
import { textVariants } from '@/app/lib/animations';
import Image from 'next/image';

export default function PassionInvesting() {
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
                            Step 1 of 3
                        </motion.p>

                        <motion.h1
                            className="font-bold text-4xl lg:text-5xl text-white leading-tight mb-8"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                        >
                            What is Passion Investing?
                        </motion.h1>

                        <div className="text-emerald-50 text-base lg:text-lg leading-relaxed space-y-5">
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                            >
                                Passion investing focuses on investing in companies
                                or industries that relate to your interests. By investing
                                in areas you care about, it becomes more engaging —
                                motivating you to stay informed and make better
                                long-term decisions.
                            </motion.p>
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                            >
                                A tech enthusiast might invest in startups. Someone into
                                sustainable living might focus on clean energy companies.
                                The key is aligning investments with your interests to
                                create a more rewarding experience.
                            </motion.p>
                        </div>
                    </div>

                    <div className="hidden md:flex shrink-0 bg-black/20 rounded-full p-6 mt-2">
                        <Image src="/path.svg" quality={100} width={160} height={160} alt="" />
                    </div>

                </div>
            </div>

            {/* Nav buttons */}
            <div className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto w-full px-6 md:px-0 flex justify-between mt-12 pb-24">
                <ButtonArrow direction="back" href="/" text="Back" />
                <ButtonArrow direction="next" href="/question-one" text="Next" />
            </div>

        </main>
    );
}