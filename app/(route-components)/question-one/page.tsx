'use client';

import { useState } from 'react';
import { validateHobbies } from '@/app/actions/validation';
import { useRouter } from 'next/navigation';
import { useQuestionStore } from '@/store/questiondata';
import { motion } from 'motion/react';
import { textVariants } from '@/app/lib/animations';
import toast from 'react-hot-toast';
import ButtonArrow from '../../ui-components/buttonarrow';

export default function QuestionOne() {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const {
        setHobbies,
        setRefinedHobbies,
        setSelectedRefinedHobbies,
        setCompanies,
    } = useQuestionStore();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const hobbiesValue = formData.get('hobbies') as string;

        if (!hobbiesValue?.trim()) {
            toast.error('Please add at least one hobby!');
            return;
        }

        setLoading(true);
        const result = await validateHobbies(formData);
        setLoading(false);

        if (result.error) {
            const message = typeof result.error === 'string'
                ? result.error
                : Object.values(result.error).flat().join(', ');
            toast.error(message);
            return;
        }

        const hobbiesResult = result.hobbies as string[];
        setHobbies(hobbiesResult);
        setRefinedHobbies(null);
        setSelectedRefinedHobbies([]);
        setCompanies(null);
        router.push('/question-two');
    };

    return (
        <form
            className="flex flex-col items-center mx-auto mt-24 md:mt-28 px-6 md:px-0 pb-24"
            onSubmit={handleSubmit}
        >
            <motion.p
                className="text-emerald-600 text-xs font-medium tracking-widest uppercase mb-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                Step 2 of 4
            </motion.p>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 max-w-2xl">
                What hobbies are you passionate about?
            </h1>

            <input
                name="hobbies"
                id="hobbies"
                type="text"
                className="w-full max-w-xl h-10 rounded-md bg-slate-500/10 border border-slate-400/60
                text-base text-center text-black focus:outline-2 focus:outline-emerald-400"
                formNoValidate
                placeholder="I enjoy surfing, hiking, and gaming"
                aria-label="Please enter at least one hobby"
            />

            {/* Nav buttons */}
            <div className="w-full max-w-xl flex justify-between mt-16">
                <ButtonArrow
                    type="button"
                    direction="back"
                    href="/passion-inv"
                    text="Back"
                />
                <ButtonArrow
                    disabled={loading}
                    type="submit"
                    direction="next"
                    text="Next"
                />
            </div>
        </form>
    );
}