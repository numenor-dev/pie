'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';

type ButtonArrowProps = {
    disabled?: boolean | undefined;
    type?: 'submit' | 'reset' | 'button';
    direction: 'next' | 'back';
    href?: string;
    onClick?: () => void;
    className?: string;
};


export default function ButtonArrow({
    disabled,
    type = 'button',
    direction,
    href,
    onClick,
    className = '',
}: ButtonArrowProps) {

    const pathname = usePathname();
    const isQuestionOne = pathname === "/question-one";

    const arrowVariants = {
        hidden: { opacity: 0, y: isQuestionOne ? 0 : 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hover: {
            x: direction === 'next' ? 5 : -5,
            transition: {
                repeatType: 'reverse' as const,
                duration: 0.3
            }
        },
    };


    const animatedButtonArrow = (
        <motion.button
            disabled={disabled}
            type={type}
            className={`cursor-pointer flex ${className}`}
            onClick={onClick}
        >
            {direction === 'next' ? (
                <>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 h-12 w-16"
                        variants={arrowVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                        whileHover="hover"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </motion.svg>
                </>
            ) : (
                <>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 h-12 w-16"
                        variants={arrowVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                        whileHover="hover"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                        />
                    </motion.svg>
                </>
            )}
        </motion.button>
    );

    if (href) {
        return <Link href={href}>{animatedButtonArrow}</Link>
    }

    return animatedButtonArrow;
}