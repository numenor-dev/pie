'use server';

import Anthropic from "@anthropic-ai/sdk";
import type { RefinedHobbies, Company } from '@/store/questiondata';

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

function extractJSON<T>(text: string): T {
    try {
        const cleaned = text
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim();
        return JSON.parse(cleaned) as T;
    } catch (e) {
        throw new Error(`Failed to parse Claude response as JSON: ${(e as Error).message}\nRaw: ${text}`);
    }
}

export async function refineHobbies(hobbies: string[]) {

    if (!hobbies.length) throw new Error('Hobbies cannot be empty!');

    const message = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{
            role: 'user',
            content: `Given these hobbies: ${hobbies.join(', ')}
      
        For each hobby, provide exactly 5 refined subcategories or specializations.

        Return ONLY valid JSON with this exact structure (no markdown, no extra text):
        {
            "hobby_name": ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
        }

        Respond with ONLY the JSON object.`
        }]
    });

    const textBlock = message.content.find(block => block.type === 'text');

    if (!textBlock || textBlock.type !== 'text') {
        throw new Error('No text response from Claude');
    }

    return extractJSON(textBlock.text) as RefinedHobbies;
}

export async function findCompanies(refinedHobbies: string[]) {

    if (!refinedHobbies.length) throw new Error('refinedHobbies cannot be empty!');

    const message = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 2048,
        messages: [{
            role: 'user',
            content: `Given these specific interests: ${refinedHobbies.join(', ')}
            
            Identify 1 publicly traded company for each interest.

            Return ONLY valid JSON (no markdown, no extra text) in this exact format:
            [
                {
                    "name": "Company Name",
                    "ticker": "SYMBOL",
                    "website": "https://companywebsite.com",
                    "description": "Brief relevance description"
                }
            ]

            Respond with ONLY the JSON array.`
        }]
    });

    const textBlock = message.content.find(block => block.type === 'text');

    if (!textBlock || textBlock.type !== 'text') {
        throw new Error('No text response from Claude');
    }

    return extractJSON(textBlock.text) as Company[];
}