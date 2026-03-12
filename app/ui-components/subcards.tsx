'use client';

import { useState } from 'react';
import { useQuestionStore } from '@/store/questiondata';
import type { RefinedHobbies } from '@/store/questiondata';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import ButtonArrow from './buttonarrow';

type SubCardsProps = {
    refHobbies: RefinedHobbies;
}

export default function SubCards({ refHobbies }: SubCardsProps) {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);
    const { setSelectedRefinedHobbies } = useQuestionStore();

    const handleSubmit = () => {
        setSelectedRefinedHobbies(selected);
        router.push('/value-inv');
    };

    const toggleSelect = (option: string) => {
        setSelected(prev =>
            prev.includes(option) ? prev.filter(s => s !== option) : [...prev, option]
        );
    };

    let optionIndex = 0;
    const allOptions: { hobby: string; option: string; index: number; row: number; col: number }[] = [];

    const cols = 3;
    Object.entries(refHobbies).forEach(([hobby, options]) => {
        options.forEach(option => {
            const row = Math.floor(optionIndex / cols);
            const col = optionIndex % cols;
            allOptions.push({ hobby, option, index: optionIndex, row, col });
            optionIndex++;
        });
    });

    const getDelay = (row: number, col: number) => (row + col) * 0.12;

    return (
        <div className="xl:max-w-7xl lg:max-w-5xl flex flex-col mx-auto pt-12 px-4">
            <h2 className="text-center font-bold text-4xl sm:text-5xl mb-12">
                Which of these areas interest you the most?
            </h2>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-0 mx-4"
                style={{ perspective: '1000px' }}
            >
                {allOptions.map(({ option, row, col }) => {
                    const isSelected = selected.includes(option);
                    return (
                        <motion.button
                            key={option}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: getDelay(row, col),
                                ease: 'easeOut'
                            }}
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => toggleSelect(option)}
                            className={`
                                relative group px-5 py-4 rounded-xl text-base sm:text-lg font-medium
                                text-left overflow-hidden border transition-colors duration-200
                                ${isSelected
                                    ? 'border-[#68d391] bg-[#68d391]/10 text-[#68d391]'
                                    : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10'
                                }
                            `}
                        >
                            {/* Shimmer on hover */}
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full" />

                            {/* Selected glow */}
                            {isSelected && (
                                <motion.span
                                    layoutId={`glow-${option}`}
                                    className="absolute inset-0 rounded-xl bg-[#68d391]/10 blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}

                            <span className="relative flex items-center justify-between gap-2">
                                {option}
                                <motion.span
                                    initial={false}
                                    animate={{ scale: isSelected ? 1 : 0, opacity: isSelected ? 1 : 0 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    className="text-[#68d391] text-lg leading-none shrink-0"
                                >
                                    ✓
                                </motion.span>
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-64 mb-20">
                <ButtonArrow
                    onClick={handleSubmit}
                    direction="next"
                    className="mt-20"
                />
                <ButtonArrow
                    direction="back"
                    href="/question-one"
                    className="mt-20"
                />
            </div>
        </div>
    );
}