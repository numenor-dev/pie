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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, direction: string) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const result = await validateHobbies(formData);
        setLoading(false);

        if (!result.hobbies?.length && direction === "next") {
            toast.error('Please add at least one hobby!');
            return
        }

        if (result.error) {
            const messages = Object.values(result.error ?? {}).flat().join(', ');
            toast.error(messages);
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
            md:pt-24 pt-16 items-center mx-auto min-h-screen mt-28"
            onSubmit={(e) => handleSubmit(e, "next")}

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
                    rounded-md bg-stone-500/10 border border-black lg:w-[65em] md:w-[35em] w-[25em] h-10 text-center
                    text-base text-black focus:border-emerald-500
                     focus:bg-stone-400/10
                    "
                    formNoValidate
                    placeholder="I enjoy surfing, hiking, and gaming"
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