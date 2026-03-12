'use server';

import { parseWithZod } from '@conform-to/zod';
import { z } from 'zod';

const schema = z.object({
    hobbies: z
        .string()
        .min(1)
});

const FILLER_WORDS = [
    'favorite',
    'my',
    'stuff',
    'things',
];

export async function validateHobbies(formData: FormData) {
    try {
        const submission = parseWithZod(formData, { schema });

        if (submission.status !== 'success') {
            return {
                success: false,
                error: submission.reply()
            };
        }

        const hobbyList = submission.value.hobbies
            .split(/[\n,]+/)
            .map((h) => {
                return h
                    .trim()
                    .split(/\s+/)
                    .filter(word => !FILLER_WORDS.includes(word.toLowerCase()))
                    .join(' ')
                    .trim();
            })
            .filter(Boolean);

        if (hobbyList.length === 0) {
            return {
                success: false,
                error: 'Please enter at least one hobby!'
            };
        }

        return { success: true, hobbies: hobbyList };
    } catch (e) {
        console.error('validateHobbies unexpected error:', e);
        return { success: false, error: 'Something went wrong. Please try again.' };
    }
}