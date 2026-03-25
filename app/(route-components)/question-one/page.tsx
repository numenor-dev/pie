'use client';

import { useState } from 'react';
import { validateHobbies } from '@/app/actions/validation';
import { useRouter } from 'next/navigation';
import { useQuestionStore } from '@/store/questiondata';
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
    }

    return (
        <form
            className="xl:max-w-7xl lg:max-w-4xl max-w-lg flex flex-col
            md:pt-24 pt-16 items-center mx-auto mt-28"
            onSubmit={handleSubmit}

        >
            <h1 className="md:text-5xl text-4xl font-bold text-center mb-10 px-2">
                What hobbies are you passionate about?
            </h1>
            <label className="flex flex-col items-start space-y-2">
                <input
                    name="hobbies"
                    id="hobbies"
                    type="text"
                    className="xl:max-w-7xl md:max-w-4xl max-w-xs
                    rounded-md bg-slate-500/10 border border-slate-500 lg:w-[65em] md:w-[35em] w-[25em] h-10 text-center
                    text-base text-black focus:outline-2 focus:outline-emerald-200
                    "
                    formNoValidate
                    placeholder="I enjoy surfing, hiking, and gaming"
                    aria-label="Please enter at least one hobby"
                />
            </label>

            {/* Nav buttons */}
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-40">
                <ButtonArrow
                    disabled={loading}
                    type="submit"
                    direction="next"
                    className="mt-20"
                />

                <ButtonArrow
                    type="button"
                    direction="back"
                    href="/passion-inv"
                    className="mt-20"
                />
            </div>
        </form>
    );
}