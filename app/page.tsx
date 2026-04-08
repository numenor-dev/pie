'use client';

import { motion } from 'motion/react';
import Button from './ui-components/button';
import { ChartPie } from './ui-components/pie-chart';

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
    <main className="flex flex-col mx-auto pt-16 md:pt-7">
      <div className="bg-stone-200/50 w-full py-5">
        <div className="max-w-7xl mx-auto px-10 md:py-16 py-8 flex flex-col md:flex-row items-center gap-12">

          {/* Text column */}
          <div className="flex flex-col space-y-3 flex-1">
            <motion.h2
              className="lg:text-4xl md:text-3xl text-2xl md:text-left text-center tracking-tight font-semibold"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Your Personalized Investment Explorer
            </motion.h2>

            <motion.p
              className="lg:text-lg text-base leading-relaxed"
              style={{ opacity: 0.8 }}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              PIE is a tool to help you navigate passion and value investing.
              It will not buy stocks or provide financial advice, but it will
              teach you about both strategies while helping you find
              companies that align with your interests and values.
            </motion.p>
          </div>

          <ChartPie />

        </div>
      </div>

      <motion.div
        className="mx-auto mt-3 pb-28"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Button
          href="/passion-inv"
          className="
          px-8 py-2 text-xl cursor-pointer rounded-3xl font-semibold
          bg-stone-800 text-stone-200 hover:ring-2 hover:ring-emerald-600/50
          "
        >
          Begin
        </Button>
      </motion.div>
    </main>
  );
}