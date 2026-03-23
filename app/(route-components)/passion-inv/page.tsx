'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../../ui-components/buttonarrow';

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

export default function PassionInvesting() {
    return (
        <div className="lg:max-w-7xl md:max-w-4xl max-w-xl flex flex-col mx-auto mt-32">
            <motion.h1
                className="font-bold lg:text-6xl text-4xl mx-auto px-5 text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Passion Investing?
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

            {/* Nav buttons */}
            <div className="md:gap-x-96 md:mt-20 mt-16 flex flex-row-reverse mx-auto gap-x-40 pb-32">
                <ButtonArrow
                    direction="next"
                    href="/question-one"
                   
                />

                <ButtonArrow
                    direction="back"
                    href="/"
                />
            </div>
        </div>
    )
}