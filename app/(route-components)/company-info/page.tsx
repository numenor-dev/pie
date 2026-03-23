'use client';

import { useQuestionStore } from "@/store/questiondata";
import { findCompanies } from "@/app/actions/claude";
import { useEffect, useState } from 'react';
import CompanyCards from "@/app/ui-components/companycards";
import LoadingAnimation from "@/app/ui-components/loading-animation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CompanyInformation() {

    const router = useRouter();

    const {
        selectedRefinedHobbies,
        setCompanies,
        companies
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

     useEffect(() => {
        if (!selectedRefinedHobbies.length) router.replace('/question-one');
    }, [selectedRefinedHobbies, router]);

    useEffect(() => {
        if (companies) return;

        const fetchCompanies = async () => {
            setLoading(true);
            setError(null);
            try {
                const relatedCompanies = await findCompanies(selectedRefinedHobbies);
                setCompanies(relatedCompanies)
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

        fetchCompanies();

    }, [companies, setCompanies, selectedRefinedHobbies])

    if (loading) {
        return (
            <LoadingAnimation />
        );
    }

    if (error) return <p className="text-red-500">{error}</p>;
    if (!companies) return null;

    return (
        <div className="mt-32">
            <CompanyCards relatedCompanies={companies} />
        </div>
    )
}