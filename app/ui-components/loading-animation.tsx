import { motion, Variants } from 'motion/react';

export default function LoadingAnimation() {

    const dotVariants: Variants = {
            pulse: {
                scale: [1, 1.5, 1],
                transition: {
                    duration: 1.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }
        };

    return (
        <motion.div
                className="min-h-screen flex items-center justify-center gap-x-4"
                animate="pulse"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            >
                <motion.div className="w-4 h-4 rounded-3xl bg-slate-200 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-3xl bg-slate-200 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-3xl bg-slate-200 will-change-transform" variants={dotVariants} />
            </motion.div>
    )

}