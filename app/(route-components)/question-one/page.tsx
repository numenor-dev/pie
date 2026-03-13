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
            onSubmit={(e) => handleSubmit(e, "next")}
            className="xl:max-w-7xl lg:max-w-4xl max-w-xl flex flex-col
                pt-24 items-center justify-center mx-auto"
        >
            <h1 className="text-5xl font-bold text-center mb-12">
                What hobbies are you passionate about?
            </h1>
            <label className="flex flex-col items-start space-y-2">
                <input
                    name="hobbies"
                    type="text"
                    className="
                    rounded-md bg-slate-200 lg:w-[65em] md:w-[35em] w-[25em] md:h-10 h-16 text-center
                    text-md text-slate-900 focus:border-2
                    focus:outline-none
                    "
                    id="hobbies"
                    formNoValidate
                    placeholder="I enjoy surfing and hiking"
                />
            </label>

            {/* Nav buttons */}
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-52">
                <ButtonArrow
                    disabled={loading}
                    type="submit"
                    direction="next"
                    className="mt-20"
                />

                <ButtonArrow
                    type="button"
                    direction="back"
                    className="mt-20"
                />
            </div>
        </form>
    );
}