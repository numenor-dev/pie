'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'motion/react';

function describePieBody(cx: number, cy: number, r: number) {
    // Pie with a slice removed from ~345° to ~75°
    const toRad = (d: number) => (d - 90) * (Math.PI / 180);
    const startDeg = 75;
    const endDeg = 345;
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 1,1 ${x2},${y2} Z`;
}

function describeSlice(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
    const toRad = (d: number) => (d - 90) * (Math.PI / 180);
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`;
}

// The removed slice spans 345° to 75° (going through 0°/top) — 90° wedge
const SLICE_START = 345;
const SLICE_END = 75;


const MID_ANGLE_DEG = 30;
const toRad = (d: number) => (d - 90) * (Math.PI / 180);
const OFFSET_DIST = 7;
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
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={describePieBody(20, 20, 16)} fill="currentColor" />
                    <motion.path
                        d={describeSlice(20, 20, 16, SLICE_START, SLICE_END)}
                        fill="currentColor"
                        animate={{
                            x: hovered ? 0 : sliceOffsetX,
                            y: hovered ? 0 : sliceOffsetY,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    />
                </svg>
                <span className="text-lg font-semibold">P.I.E.</span>
            </motion.div>
        </Link>
    );
}