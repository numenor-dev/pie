'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../../ui-components/buttonarrow';
import { textVariants } from '@/app/lib/animations';

export default function PassionInvesting() {
    return (
        <main className="lg:max-w-7xl md:max-w-4xl max-w-xl flex flex-col mx-auto pt-16 md:pt-24">
            <motion.h1
                className="font-bold lg:text-5xl text-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-xs mx-auto text-center"
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

                <div className="hidden md:flex shrink-0 md:ml-5 lg:ml-12">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-64 h-64"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.9922 8.07411C18.7683 8.30212 18.5423 8.50328 18.3375 8.67188C18.1401 8.50899 17.9227 8.31226 17.7078 8.08774C16.9853 7.333 16.5 6.48786 16.5 5.6875C16.5 4.59138 17.3653 3.75 18.375 3.75C19.3847 3.75 20.25 4.59138 20.25 5.6875C20.25 6.46225 19.7514 7.30076 18.9922 8.07411ZM21.75 5.6875C21.75 8.4375 18.375 10.5 18.375 10.5C18.2063 10.5 15 8.4375 15 5.6875C15 3.78902 16.511 2.25 18.375 2.25C20.239 2.25 21.75 3.78902 21.75 5.6875ZM3.75 9C3.75 10.2426 4.75736 11.25 6 11.25H18C20.0711 11.25 21.75 12.9289 21.75 15C21.75 17.0711 20.0711 18.75 18 18.75H9.75V17.25H18C19.2426 17.25 20.25 16.2426 20.25 15C20.25 13.7574 19.2426 12.75 18 12.75H6C3.92893 12.75 2.25 11.0711 2.25 9C2.25 6.92893 3.92893 5.25 6 5.25L14.25 5.25V6.75L6 6.75C4.75736 6.75 3.75 7.75736 3.75 9ZM6.24215 19.3241C6.01829 19.5521 5.79234 19.7533 5.58752 19.9219C5.39011 19.759 5.1727 19.5623 4.95777 19.3377C4.23528 18.583 3.75 17.7379 3.75 16.9375C3.75 15.8414 4.61529 15 5.625 15C6.63471 15 7.5 15.8414 7.5 16.9375C7.5 17.7123 7.00145 18.5508 6.24215 19.3241ZM9 16.9375C9 19.6875 5.625 21.75 5.625 21.75C5.45625 21.75 2.25 19.6875 2.25 16.9375C2.25 15.039 3.76104 13.5 5.625 13.5C7.48896 13.5 9 15.039 9 16.9375ZM6.75 16.875C6.75 17.4963 6.24632 18 5.625 18C5.00368 18 4.5 17.4963 4.5 16.875C4.5 16.2537 5.00368 15.75 5.625 15.75C6.24632 15.75 6.75 16.2537 6.75 16.875ZM18.375 6.75C18.9963 6.75 19.5 6.24632 19.5 5.625C19.5 5.00368 18.9963 4.5 18.375 4.5C17.7537 4.5 17.25 5.00368 17.25 5.625C17.25 6.24632 17.7537 6.75 18.375 6.75Z"
                            fill="#1abc71"
                        />
                    </svg>
                </div>
            </div>

            {/* Nav buttons */}
            <div className="md:gap-x-72 md:mt-20 mt-16 flex flex-row-reverse mx-auto gap-x-36 pb-28">
                <ButtonArrow
                    direction="next"
                    href="/question-one"

                />

                <ButtonArrow
                    direction="back"
                    href="/"
                />
            </div>
        </main>
    )
}