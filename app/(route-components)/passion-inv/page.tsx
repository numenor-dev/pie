'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../../ui-components/buttonarrow';
import { textVariants } from '@/app/lib/animations';
import Image from 'next/image';

export default function PassionInvesting() {
    return (
        <main className="flex flex-col mx-auto mt-20">
            <motion.h1
                className="font-bold lg:text-5xl text-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-xs mx-auto text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Passion Investing?
            </motion.h1>

            {/* Text info */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 bg-emerald-400 py-10 mt-2 shadow-lg">
                <div className="flex items-center lg:max-w-5xl md:max-w-3xl sm:max-w-md max-w-xs mx-auto md:pl-14">
                    <div className="flex-1 lg:max-w-2xl text-left lg:text-xl text-lg text-black space-y-5 leading-relaxed">
                        <motion.p
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                        >
                            Passion investing focuses on investing in companies
                            or industries that relate to your interests.
                            The idea is that by investing in areas one
                            is passionate about, investing may become more engaging
                            and motivate you to stay informed about
                            your investments, potentially leading to better decision
                            making and long term commitment.
                        </motion.p>
                        <motion.p
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                        >
                            For example, a person passionate about technology
                            might choose to invest in tech startups. Similarly,
                            someone interested in sustainable living might focus
                            on companies developing clean energy with strong
                            environmental practices. Passion investing can extend
                            to art, sports, collectibles, and more! The key is aligning
                            investments with your interests to create a more
                            rewarding investment experience.
                        </motion.p>
                    </div>

                    <div className="hidden md:flex shrink-0 md:ml-7 lg:ml-20">
                        <Image src="/path.svg" quality={100} width={210} height={210} alt={' '} />
                    </div>
                </div>
            </div>

            {/* Nav buttons */}
            <div className="md:gap-x-72 md:mt-20 mt-16 flex flex-row-reverse mx-auto gap-x-28 pb-28">
                <ButtonArrow
                    direction="next"
                    href="/question-one"
                    text={"Next"}
                />

                <ButtonArrow
                    direction="back"
                    href="/"
                    text={"Back"}
                />
            </div>
        </main>
    )
}