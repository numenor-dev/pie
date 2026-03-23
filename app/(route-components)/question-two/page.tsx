'use client';

import { refineHobbies } from '@/app/actions/claude';
import { useQuestionStore } from '@/store/questiondata';
import SubCards from '@/app/ui-components/subcards';
import LoadingAnimation from '@/app/ui-components/loading-animation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function QuestionTwo() {

    const router = useRouter();

    const {
        hobbies,
        refinedHobbies,
        setRefinedHobbies,
    } = useQuestionStore();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!hobbies.length) router.replace('/question-one');
    }, [hobbies, router]);

    useEffect(() => {
        if (refinedHobbies) return;

        const fetchRefinedHobbies = async () => {
            setLoading(true);
            setError(null);
            try {
                const getRefined = await refineHobbies(hobbies);
                setRefinedHobbies(getRefined);
            } catch (err) {
                console.error('Failed to fetch companies:', err);
                const message = 'Something unexpected happened! Please try again.';
                setError(message);
                toast.error(message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchRefinedHobbies();
    }, [hobbies, refinedHobbies, setRefinedHobbies]);

    if (loading) {
        return (
            <LoadingAnimation />
        );
    }

    if (error) return <p className="text-red-500">{error}</p>;
    if (!refinedHobbies) return null;

    return (
        <SubCards refHobbies={refinedHobbies} />
    );
}