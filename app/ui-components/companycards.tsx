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
    const navDelay = relatedCompanies.length * 0.15 + 0.35;

    return (
        <div className="flex flex-col mx-auto px-6 md:px-0 pb-32 mt-16 md:mt-24 max-w-5xl">

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mb-3"
            >
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Potential Investments
                </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="h-px w-48 mx-auto mt-3 mb-12 md:mb-16 bg-linear-to-r from-transparent via-emerald-500 to-transparent"
            />

            {/* Cards */}
            <motion.div
                className={`gap-6 mb-12 ${relatedCompanies.length <= 2
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
                        whileHover={{ scale: 1.02 }}
                        className={`flex flex-col bg-stone-100 border border-stone-300 rounded-xl
                            px-5 py-6 cursor-pointer transition-shadow hover:shadow-md
                            ${relatedCompanies.length <= 2 ? 'w-full max-w-sm' : ''}
                        `}
                    >
                        {/* Ticker badge */}
                        <span className="self-start text-xs font-mono font-semibold tracking-widest
                            text-emerald-700 bg-emerald-100 px-2 py-1 rounded mb-3">
                            {c.ticker}
                        </span>

                        <h3 className="text-2xl font-bold text-stone-900 mb-3 wrap-break-word">
                            {c.name}
                        </h3>

                        {c.description && (
                            <p className="text-stone-600 text-base leading-relaxed flex-1">
                                {c.description}
                            </p>
                        )}

                        <span className="mt-4 text-sm font-medium text-emerald-700">
                            Visit site →
                        </span>
                    </motion.a>
                ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: relatedCompanies.length * 0.15 + 0.2 }}
                className="rounded-xl border border-stone-200 bg-stone-50 px-6 py-5 mb-12"
            >
                <p className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-2">
                    Disclaimer
                </p>
                <p className="text-base leading-7 text-stone-700">
                    {`Based on your answers, ${multipleCompanies ? 'these companies' : 'this company'} might be worth exploring further regarding passion and value investing. This is not financial advice — conduct your own research before making any investment decisions. Just a friendly slice of advice from P.I.E.`}
                </p>
            </motion.div>

            {/* Nav buttons */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: navDelay }}
                className="flex flex-col items-center gap-6"
            >
                <Button
                    className="px-10 py-3 text-lg cursor-pointer rounded-3xl font-semibold
                        bg-stone-800 text-stone-200 hover:ring-2 hover:ring-emerald-600/50"
                    href="/question-one"
                >
                    Explore More
                </Button>
                <ButtonArrow
                    direction="back"
                    href="/value-inv"
                    text="Back"
                />
            </motion.div>

        </div>
    );
}