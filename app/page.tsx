'use client';

import { motion } from 'motion/react';
import Button from './ui-components/button';

export default function Begin() {

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: index * 0.2
      }
    })
  };

  return (
    <>
      <div className="lg:max-w-7xl lg:px-0 md:max-w-4xl max-w-xl flex flex-col mx-auto pt-24 px-10">
        <motion.h1
          className="font-bold lg:text-7xl text-5xl text-center mx-auto"
          style={{ letterSpacing: '-0.02em' }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Welcome{' '}
          <span className="font-bold lg:text-7xl text-5xl">to{' '}</span>
          <span
            className="lg:text-7xl text-5xl
            bg-linear-to-br from-[#63b3ed] to-[#68d391]
            bg-clip-text text-transparent
          "
          >
            P.I.E.
          </span>
        </motion.h1>

        <motion.h1
          className="font-bold lg:text-5xl text-3xl mt-10 text-center mx-auto"
          style={{ letterSpacing: '-0.015em', fontWeight: 500 }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Your Personalized Investment Engine
        </motion.h1>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="h-px md:w-140 w-40 mt-8 mx-auto bg-linear-to-r from-transparent via-[rgba(99,179,237,0.5)] to-transparent"
        />

        <motion.span
          className="xl:px-0 lg:text-2xl lg:text-left lg:px-7 text-lg mt-14 mx-auto leading-7 text-center"
          style={{ opacity: 0.85 }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          PIE is a tool to learn about passion and value investing.
          It will not buy stocks nor provide financial advice, but it will teach you about passion
          and value investing while helping you find companies that align with your interests and values.
        </motion.span>

        <motion.div
          className="mx-auto pb-28"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            href="/passion-inv"
            className="
              relative px-7 py-2 text-xl cursor-pointer font-semibold text-white border-2
              border-white overflow-hidden mt-24
            "
          >
            Begin
          </Button>
        </motion.div>
      </div>
    </>
  );
}