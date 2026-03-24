'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'motion/react';

const PIE_BODY = "M10.9953 2.86997C10.3847 2.47444 9.79417 2.36057 9.1457 2.47365C8.59499 2.56967 8.00554 2.83384 7.37816 3.11499L7.31056 3.14528C6.78871 3.37898 6.28506 3.65696 5.80541 3.97745C4.11981 5.10374 2.80604 6.70457 2.03024 8.57751C1.25444 10.4505 1.05146 12.5114 1.44696 14.4997C1.84245 16.488 2.81867 18.3144 4.25216 19.7479C5.68565 21.1813 7.51202 22.1576 9.50033 22.5531C11.4886 22.9486 13.5496 22.7456 15.4225 21.9698C17.2955 21.194 18.8963 19.8802 20.0226 18.1946C20.3431 17.715 20.621 17.2113 20.8547 16.6895L20.885 16.6218C21.1662 15.9945 21.4303 15.405 21.5264 14.8543C21.6394 14.2059 21.5256 13.6153 21.1301 13.0048C20.7036 12.3466 20.1199 12.025 19.406 11.8792C18.7721 11.7498 17.98 11.7499 17.0722 11.75L15.5 11.75C14.536 11.75 13.8884 11.7484 13.4054 11.6835C12.9439 11.6214 12.7464 11.5142 12.6161 11.3839C12.4858 11.2536 12.3786 11.0561 12.3165 10.5946C12.2516 10.1116 12.25 9.46403 12.25 8.50002L12.25 6.92784C12.2501 6.02003 12.2502 5.22795 12.1208 4.59406C11.9751 3.88016 11.6534 3.29637 10.9953 2.86997Z";

const PIE_SLICE = "M17.2059 1.85619C16.1431 1.4375 15.116 1.72093 14.389 2.36753C13.6798 2.99824 13.25 3.96989 13.25 5.00003V9.00003C13.25 9.96653 14.0335 10.75 15 10.75H19C20.0301 10.75 21.0018 10.3202 21.6325 9.61103C22.2791 8.884 22.5625 7.85691 22.1438 6.79412C21.2558 4.53992 19.4601 2.74423 17.2059 1.85619Z";

// pie slice
const MID_ANGLE_DEG = 30;
const toRad = (d: number) => (d - 90) * (Math.PI / 180);
const OFFSET_DIST = 2;
const sliceOffsetX = OFFSET_DIST * Math.cos(toRad(MID_ANGLE_DEG));
const sliceOffsetY = OFFSET_DIST * Math.sin(toRad(MID_ANGLE_DEG));

export default function HomeButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href="/" aria-label="Go to home">
            <motion.div
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                className="inline-flex items-center gap-x-2 mt-2 sm:ml-0 ml-10 cursor-pointer hover:text-emerald-400 transition-colors duration-200"
            >
                <svg
                    width="30"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d={PIE_BODY}
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                    <motion.path
                        d={PIE_SLICE}
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        animate={{
                            x: hovered ? 0 : sliceOffsetX,
                            y: hovered ? 0 : sliceOffsetY,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    />
                    {/* Rendered last so it paints over both paths and any stray edges */}
                    <motion.circle
                        cx="12"
                        cy="12"
                        r="11.5"
                        fill="currentColor"
                        animate={{ opacity: hovered ? 1 : 0 }}
                        transition={{ duration: 0.2, delay: hovered ? 0.1 : 0 }}
                    />
                </svg>
                <span className="text-lg font-semibold">P.I.E.</span>
            </motion.div>
        </Link>
    );
}