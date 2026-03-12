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
      <div className="lg:max-w-7xl max-w-xl flex flex-col mx-auto md:pt-24 pt-16 pb-32">
        <motion.h1
          className="font-bold text-7xl md:mx-auto mx-1 text-center"
          style={{ letterSpacing: '-0.02em' }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Welcome to{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #63b3ed 0%, #68d391 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            P.I.E.
          </span>
        </motion.h1>

        <motion.h1
          className="font-bold text-6xl mt-10 md:mx-auto mx-1 text-center"
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
          style={{
            height: 1.5,
            width: '35rem',
            margin: '2rem auto 0',
            background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.5), transparent)',
          }}
        />

        <motion.span
          className="md:text-2xl text-3xl mt-16 md:mx-auto md:text-justify mx-4 text-center leading-10"
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
          className="mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            href="/passion-inv"
            className="
              relative px-7 py-2 text-xl cursor-pointer font-semibold text-white border-2
              border-white overflow-hidden mt-32
            "
          >
            Begin
          </Button>
        </motion.div>
      </div>
    </>
  );
}