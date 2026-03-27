'use client';

import { motion } from 'motion/react';
import type { Company } from '@/store/questiondata';
import ButtonArrow from './buttonarrow';
import Button from './button';

type CompanyInfoProps = {
    relatedCompanies: Company[];
}

export default function CompanyCards({ relatedCompanies }: CompanyInfoProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.15
            }
        })
    };

    const multipleCompanies = relatedCompanies.length > 1;

    return (
        <div className="lg:max-w-7xl md:max-w-4xl max-w-xl mx-auto px-5">

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                className="text-center"
            >
                <h1 className="lg:text-5xl text-4xl font-bold">
                    Potential Investments
                </h1>
            </motion.div>

             {/* Divider */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="h-px md:w-140 w-56 md:mt-5 mt-3 mx-auto md:mb-16 mb-10 bg-linear-to-r from-transparent via-emerald-500 to-transparent"
            />

            {/* Cards */}
            <motion.div
                className={`lg:px-0 sm:mb-28 mb-20 mx-auto gap-8 ${relatedCompanies.length <= 2
                    ? 'flex flex-wrap justify-center'
                    : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                    }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {relatedCompanies.map((c, index) => (
                    <motion.a
                        key={c.name}
                        href={c.website}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        className={`bg-slate-100 rounded-lg shadow-xl py-6 cursor-pointer transition-shadow ${relatedCompanies.length <= 2 ? 'w-96' : ''
                            }`}
                    >
                        <h3 className="text-4xl font-bold text-black mb-2 wrap-break-word px-3">{c.name}</h3>
                        <p className="text-base font-mono text-sky-500 font-semibold mb-3 wrap-break-word px-3">Stock symbol: {c.ticker}</p>
                        <p className="text-base font-mono text-sky-500 font-semibold mb-3 wrap-break-word px-3">Website: {c.website}</p>
                        {c.description && (
                            <p className="text-stone-900 font-noto text-lg leading-relaxed wrap-break-word px-3">{c.description}</p>
                        )}
                    </motion.a>
                ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: relatedCompanies.length * 0.15 + 0.2 }}
                className="relative rounded-xl border border-stone-900 bg-sky-900/10 px-6 py-5 mb-3 md:max-w-4xl max-w-xl mx-auto"
            >
                <p className="text-sm font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                    Disclaimer
                </p>
                <span className="lg:text-xl md:text-lg md:leading-8 text-base text-left leading-7 text-black">
                    {`Based on your answers, ${multipleCompanies ? 'these companies' : 'this company'} might be worth exploring further regarding passion investing and/or value investing. As a reminder, this is not financial advice. Remember to conduct your own research before making any investment decisions. Just a friendly slice of advice from P.I.E.`}
                </span>
            </motion.div>

            {/* Nav buttons */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: relatedCompanies.length * 0.15 + 0.35 }}
                className="flex flex-col items-center pb-40 mt-12 space-y-12"
            >
                <ButtonArrow
                    direction="back"
                    href="/value-inv"
                    text={"Back"}
                />
                <Button
                     className="relative px-8 py-3 text-xl cursor-pointer rounded-md font-semibold border-2 bg-black border-black text-stone-200 hover:border-emerald-500 overflow-hidden"
                    href="/question-one"
                >
                    Explore More
                </Button>
            </motion.div>
        </div>
    );
}