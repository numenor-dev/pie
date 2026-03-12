'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'motion/react';

function describeSlice(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
    const toRad = (d: number) => (d - 90) * (Math.PI / 180);
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z`;
}

const slices = [
    { start: 0, end: 120, color: '#63b3ed', hoverColor: '#90cdf4' }, // blue
    { start: 120, end: 240, color: '#68d391', hoverColor: '#9ae6b4' }, // green
    { start: 240, end: 360, color: '#f6ad55', hoverColor: '#fbd38d' }, // amber
];

export default function Header() {
    const [hovered, setHovered] = useState(false);
    const [activeSlice, setActiveSlice] = useState<number | null>(null);

    return (
        <div className="p-10">
            <Link
                href="/"
                aria-label="Go to home"
                style={{ display: 'inline-block', lineHeight: 0 }}
            >
                <motion.div
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => { setHovered(false); setActiveSlice(null); }}
                    animate={{ rotate: hovered ? 15 : 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    style={{ display: 'inline-block', cursor: 'pointer' }}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'block' }}
                    >
                        {slices.map((slice, i) => (
                            <motion.path
                                key={i}
                                d={describeSlice(20, 20, 16, slice.start, slice.end)}
                                fill={activeSlice === i ? slice.hoverColor : slice.color}
                                onHoverStart={() => setActiveSlice(i)}
                                onHoverEnd={() => setActiveSlice(null)}
                                animate={{
                                    scale: activeSlice === i ? 1.08 : 1,
                                    opacity: hovered && activeSlice !== null && activeSlice !== i ? 0.55 : 1,
                                }}
                                style={{ originX: '20px', originY: '20px', transformBox: 'fill-box', transformOrigin: 'center' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />
                        ))}

                        <circle cx="20" cy="20" r="5" fill="currentColor" style={{ color: 'var(--background, #0a0a0a)' }} />

                        <circle
                            cx="20" cy="20" r="16"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                </motion.div>
            </Link>
        </div>
    );
}