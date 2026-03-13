'use client';

import { refineHobbies } from '@/app/api/claude';
import { useQuestionStore } from '@/store/questiondata';
import SubCards from '@/app/ui-components/subcards';
import LoadingAnimation from '@/app/ui-components/loading-animation';
import { useEffect, useState } from 'react';


export default function QuestionTwo() {

    const {
        hobbies,
        refinedHobbies,
        setRefinedHobbies,
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (refinedHobbies) return;

        const fetchRefinedHobbies = async () => {
            setLoading(true);
            try {
                const getRefined = await refineHobbies(hobbies);
                setRefinedHobbies(getRefined);
            } catch (error) {
                console.error('Failed to refine hobbies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRefinedHobbies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setRefinedHobbies]);

    if (loading) {
        return (
            <LoadingAnimation />
        );
    }

    if (!refinedHobbies) return null;

    return (
        <SubCards refHobbies={refinedHobbies} />
    );
}