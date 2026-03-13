'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../../ui-components/buttonarrow';

export default function PassionInvesting() {

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

    return (
        <div className="lg:max-w-7xl md:max-w-4xl max-w-xl flex flex-col mx-auto">
            <motion.h1
                className="font-bold lg:text-7xl text-5xl mx-auto px-5 text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Passion Investing?
            </motion.h1>
            {/* Thin divider */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="h-px md:w-140 w-40 mt-8 mx-auto bg-linear-to-r from-transparent via-[rgba(99,179,237,0.5)] to-transparent"
            />
            <motion.span
                className="lg:text-2xl lg:leading-9 lg:text-justify text-xl mt-12 mx-auto px-14 leading-7"
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
            </motion.span>
            <motion.span
                className="lg:text-2xl lg:leading-9 lg:text-justify text-xl mt-4 mx-auto px-14 leading-7"
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
            </motion.span>
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-52 mb-32">
                <ButtonArrow
                    direction="next"
                    href="/question-one"
                    className="mt-20"
                />

                <ButtonArrow
                    direction="back"
                    href="/"
                    className="mt-20"
                />
            </div>
        </div>
    )
}