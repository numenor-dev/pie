'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    href?: string;
    onClick?: () => null;
    className?: string;
};

const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        scale: 1.01
    },
    tap: {
        scale: 0.98
    }
};

export default function Button({
    type,
    children,
    href,
    onClick,
    className = '',
}: ButtonProps) {
    const animatedButton = (
        <motion.button
            type={type}
            className={`relative overflow-hidden ${className}`}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            onClick={onClick}
            whileHover="hover"
            whileTap="tap"
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );

    if (href) {
        return <Link href={href}>{animatedButton}</Link>;
    }

    return animatedButton;
}