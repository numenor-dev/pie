'use client';

import { useQuestionStore } from "@/store/questiondata";
import { findCompanies } from "@/app/api/claude";
import { useEffect, useState } from 'react';
import CompanyCards from "@/app/ui-components/companycards";
import LoadingAnimation from "@/app/ui-components/loading-animation";

export default function CompanyInformation() {

    const {
        selectedRefinedHobbies,
        setCompanies,
        companies
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (companies) return;

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
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRefinedHobbies])

    if (loading) {
        return (
            <LoadingAnimation />
        );
    }

    if (!companies) return null;

    return (
        <div>
            <CompanyCards relatedCompanies={companies} />
        </div>
    )
}