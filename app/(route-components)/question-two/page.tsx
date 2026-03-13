'use client';

import { refineHobbies } from '@/app/api/claude';
import { useQuestionStore } from '@/store/questiondata';
import SubCards from '@/app/ui-components/subcards';
import LoadingAnimation from '@/app/ui-components/loading-animation';
import { useEffect, useState, useRef } from 'react';


export default function QuestionTwo() {

    const {
        hobbies,
        refinedHobbies,
        setRefinedHobbies,
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (hasRunRef.current) return;
        hasRunRef.current = true;

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

    }, [hobbies, setRefinedHobbies]);

    if (loading) {
        return (
            <LoadingAnimation />
        );
    }

    return (
        <SubCards refHobbies={refinedHobbies} />
    );
}