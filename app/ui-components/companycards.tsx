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
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-bold mb-3">
                    Your{' '}
                    <span className="bg-linear-to-r from-[#63b3ed] to-[#68d391] bg-clip-text text-transparent">
                        Matches
                    </span>
                </h1>
                <p className="text-white/50 text-base sm:text-lg">
                    {relatedCompanies.length} {multipleCompanies ? 'companies' : 'company'} aligned with your interests
                </p>
                <div className="h-px w-24 mx-auto mt-5 bg-linear-to-r from-transparent via-[#63b3ed]/50 to-transparent" />
            </motion.div>

            {/* Cards */}
            <motion.div
                className={`lg:px-0 mb-12 mx-auto px-5 gap-8 ${relatedCompanies.length <= 2
                    ? 'flex flex-wrap justify-center'
                    : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                    }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {relatedCompanies.map((c, index) => (
                    <motion.button
                        key={c.name}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        onClick={() => window.open(c.website, '_blank')}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        className={`bg-slate-100 rounded-lg shadow-xl py-6 cursor-pointer transition-shadow ${relatedCompanies.length <= 2 ? 'w-96' : ''
                            }`}
                    >
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">{c.name}</h3>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Stock symbol: {c.ticker}</p>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Website: {c.website}</p>
                        {c.description && (
                            <p className="text-stone-900 font-noto text-lg leading-relaxed px-5">{c.description}</p>
                        )}
                    </motion.button>
                ))}
            </motion.div>

            {/* Full-width divider */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-10" />

            {/* Disclaimer box */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: relatedCompanies.length * 0.15 + 0.2 }}
                className="relative rounded-xl border border-white/10 bg-white/5 px-6 py-5 mb-4 max-w-3xl mx-auto"
            >
                <p className="text-xs font-mono text-[#63b3ed]/70 uppercase tracking-widest mb-2">
                    Disclaimer
                </p>
                <span className="lg:text-xl lg:leading-9 lg:text-justify text-base leading-7 text-white/70">
                    {`Based on your answers, ${multipleCompanies ? 'these companies' : 'this company'} might be worth exploring further regarding passion investing and/or value investing. As a reminder, this is not financial advice. Remember to conduct your own research before making any investment decisions. Just a friendly slice of advice from P.I.E.`}
                </span>
            </motion.div>

            {/* Actions */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: relatedCompanies.length * 0.15 + 0.35 }}
                className="flex flex-col items-center pb-40"
            >
                <ButtonArrow
                    direction="back"
                    href="/value-inv"
                    className="my-12"
                />
                <Button
                    className="mx-auto px-7 py-2 text-xl font-semibold text-white border-2 border-white overflow-hidden relative mt-10 flex items-center gap-3"
                    href="/question-one"
                >
                    Explore More
                </Button>
            </motion.div>
        </div>
    );
}