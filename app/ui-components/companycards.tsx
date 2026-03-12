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
        visible: {
            opacity: 1
        }
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
        <div className="lg:max-w-7xl md:max-w-4xl max-w-xl mx-auto px-5 pt-10">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 place-item-center mx-auto"
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
                        className="bg-slate-100 rounded-lg shadow-md px-8 py-6 cursor-pointer transition-shadow"
                    >
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">{c.name}</h3>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Stock symbol:{c.ticker}</p>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Website: {c.website}</p>
                        {c.description && (
                            <p className="text-stone-900 font-noto text-lg leading-relaxed">{c.description}</p>
                        )}
                    </motion.button>
                ))}
            </motion.div>

            <span className="lg:text-2xl lg:leading-9 lg:text-justify text-xl mt-12 mx-auto leading-7">
                {`Based on your answers, ${multipleCompanies ? 'these companies' : 'this company'}
                might be worth exploring further regarding passion investing or value investing
                ...or both! As a reminder, this is not financial advice. Remember to conduct your own research
                before making any investment decisions. Just a friendly slice of advice from
                P.I.E.`}
            </span>
            <div className="flex flex-col items-center pb-40">
                <ButtonArrow
                    direction="back"
                    href="/value-inv"
                    className="my-12"
                />

                <Button
                    className="
                    mx-auto px-7 py-2 text-xl font-semibold text-white border-2
                    border-white overflow-hidden relative mt-10 flex items-center gap-3
                    "
                    href="/question-one">
                    Explore More
                </Button>
            </div>
        </div>
    )
}