'use client';

import { motion } from 'motion/react';
import Button from './ui-components/button';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.2 },
  }),
};

export default function Begin() {
  return (
    <div className="flex flex-col mx-auto pt-36">
      <div className="bg-emerald-500/90 w-full shadow-lg">
        <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col md:flex-row items-center gap-12">

          {/* Text column */}
          <div className="flex flex-col gap-6 flex-1">
            <motion.h2
              className="lg:text-4xl sm:text-3xl text-2xl sm:text-left text-center tracking-tight font-semibold"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Your Personalized Investment Engine
            </motion.h2>

            <motion.p
              className="lg:text-lg text-base leading-relaxed"
              style={{ opacity: 0.8 }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              PIE is a tool to learn about passion and value investing.
              It will not buy stocks nor provide financial advice, but it will
              teach you about passion and value investing while helping you find
              companies that align with your interests and values.
            </motion.p>
          </div>

          {/* Image column */}
          <motion.img
            src="/growth.png"
            className="w-64 lg:w-80 object-contain shrink-0"
          />
        </div>
      </div>

      <motion.div
        className="mx-auto mt-16 pb-28"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Button
          href="/passion-inv"
          className="px-8 py-2 text-xl cursor-pointer rounded-md font-semibold border-2 bg-black border-black text-stone-200 hover:border-emerald-500"
        >
          Begin
        </Button>
      </motion.div>
    </div>
  );
}