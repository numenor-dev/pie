'use client';

import { useQuestionStore } from "@/store/questiondata";
import { findCompanies } from "@/app/api/claude";
import { useEffect, useState, useRef } from 'react';
import CompanyCards from "@/app/ui-components/companycards";
import LoadingAnimation from "@/app/ui-components/loading-animation";

export default function CompanyInformation() {

    const {
        selectedRefinedHobbies,
        setCompanies,
        companies
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (hasRunRef.current) return;
        hasRunRef.current = true;

        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const relatedCompanies = await findCompanies(selectedRefinedHobbies);
                setCompanies(relatedCompanies)
            } catch (error) {
                console.error('Failed to get companies', error)
            } finally {
                setLoading(false);
            }
        }

        fetchCompanies();
        
    }, [setCompanies, selectedRefinedHobbies])

    if (loading) {
        return (
            <LoadingAnimation />
        );
    }

    return (
        <div>
            <CompanyCards relatedCompanies={companies} />
        </div>
    )
}