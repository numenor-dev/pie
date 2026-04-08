'use client';

import { motion } from 'motion/react';
import Link from 'next/link'

type ButtonArrowProps = {
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    direction: 'next' | 'back';
    href?: string;
    onClick?: () => void;
    text?: string;
};

export default function ButtonArrow({
    disabled,
    type = 'button',
    direction,
    href,
    onClick,
    text,
}: ButtonArrowProps) {

    const arrowVariants = {
        hover: {
            x: direction === 'next' ? 5 : -5,
            transition: {
                repeatType: 'reverse' as const,
                duration: 0.3,
            },
        },
    }

    const arrowSvg = (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5"
            variants={arrowVariants}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                    direction === 'next'
                        ? 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                        : 'M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                }
            />
        </motion.svg>
    );

    const innerContent = (
        <div className="flex flex-row items-center gap-x-1">
            {direction === 'back' && arrowSvg}
            {text}
            {direction === 'next' && arrowSvg}
        </div>
    );

    const sharedClassName = "border-2 border-emerald-600 rounded-3xl py-2 px-7 cursor-pointer inline-flex";

    if (href) {
        return (
            <Link href={href}>
                <motion.div
                    className={sharedClassName}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    {innerContent}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.button
            disabled={disabled}
            type={type}
            className={sharedClassName}
            onClick={onClick}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {innerContent}
        </motion.button>
    );
}