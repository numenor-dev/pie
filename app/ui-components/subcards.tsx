'use client';

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
    const { selectedRefinedHobbies, setSelectedRefinedHobbies } = useQuestionStore();
    const selected = selectedRefinedHobbies;

    const handleSubmit = () => {
        router.push('/value-inv');
    };

    const toggleSelect = (option: string) => {
        const updated = selected.includes(option)
        ? selected.filter(s => s !== option) 
        : [...selected, option];
        setSelectedRefinedHobbies(updated);
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

    return (
        <div className="lg:max-w-7xl md:max-w-4xl max-w-xl flex flex-col mx-auto pt-12 px-4">
            <h2 className="text-center font-bold text-4xl sm:text-5xl mb-12">
                Which of these areas interest you the most?
            </h2>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-0 mx-4"
            >
                {allOptions.map(({ option }) => {
                    const isSelected = selected.includes(option);
                    return (
                        <motion.button
                            key={option}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeIn'
                            }}
                            onClick={() => toggleSelect(option)}
                            className={`
                                relative group py-4 rounded-xl text-xl
                                overflow-hidden border transition-colors duration-200
                                ${isSelected
                                    ? 'border-[#68d355] bg-emerald-800 text-[#68d391]'
                                    : 'border-white/10 bg-slate-900/40 hover:border-slate-100/30 hover:bg-blue-600/10'
                                }
                            `}
                        >

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

                            <span className="relative flex items-center justify-center">
                                {option}
                                <motion.span
                                    initial={false}
                                    animate={{ scale: isSelected ? 1 : 0, opacity: isSelected ? 1 : 0 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="text-[#68d391] text-lg leading-none shrink-0"
                                >
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