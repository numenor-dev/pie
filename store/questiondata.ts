import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Company = {
    name: string;
    ticker: string;
    website: string;
    description: string;
};

export type RefinedHobbies = Record<string, string[]>;

type QuestionnaireStore = {
    hobbies: string[];
    setHobbies: (hobbies: string[]) => void;

    refinedHobbies: RefinedHobbies | null;
    setRefinedHobbies: (refinedHobbies: RefinedHobbies | null) => void;

    selectedRefinedHobbies: string[];
    setSelectedRefinedHobbies: (hobbies: string[]) => void;

    companies: Company[] | null;
    setCompanies: (companies: Company[] | null) => void;

    reset: () => void;
};

export const useQuestionStore = create<QuestionnaireStore>()(
    persist(
        (set) => ({
            hobbies: [],
            setHobbies: (hobbies) => set({ hobbies }),

            refinedHobbies: null,
            setRefinedHobbies: (refinedHobbies) => set({ refinedHobbies }),

            selectedRefinedHobbies: [],
            setSelectedRefinedHobbies: (hobbies) => set({ selectedRefinedHobbies: hobbies }),

            companies: null,
            setCompanies: (companies) => set({ companies }),

            reset: () => set({
                hobbies: [],
                refinedHobbies: null,
                selectedRefinedHobbies: [],
                companies: []
            }),
        }),
        {
            name: 'questionnaire-storage',
            storage: {
                getItem: (name) => {
                    const item = sessionStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)),
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
);