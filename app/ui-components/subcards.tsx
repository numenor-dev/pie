'use client';

import { useQuestionStore } from '@/store/questiondata';
import type { RefinedHobbies } from '@/store/questiondata';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import ButtonArrow from './buttonarrow';
import toast from 'react-hot-toast';

type SubCardsProps = {
    refHobbies: RefinedHobbies;
}

export default function SubCards({ refHobbies }: SubCardsProps) {
    const router = useRouter();
    const { selectedRefinedHobbies, setSelectedRefinedHobbies } = useQuestionStore();
    const selected = selectedRefinedHobbies;

    const handleSubmit = () => {
        if (selected.length === 0) {
            toast.error('Please select at least one interest!');
            return;
        }
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
        <div className="lg:max-w-7xl md:max-w-3xl max-w-xl flex flex-col mx-auto md:px-16 px-10 mt-32">
            <h2 className="font-bold lg:text-6xl text-4xl mx-auto text-center">
                Which of these areas interest you the most?
            </h2>

            <div
                className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 mt-12"
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
                                relative group py-3 rounded-xl text-xl
                                overflow-hidden border transition-colors duration-200
                                ${isSelected
                                    ? 'border-[#68d355] bg-emerald-500 text-black'
                                    : 'border-stone-200 bg-sky-700/30 hover:bg-cyan-600/30'
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

            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-40 mb-20">
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