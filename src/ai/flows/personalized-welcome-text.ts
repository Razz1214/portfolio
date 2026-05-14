'use server';

/**
 * @fileOverview AI-powered flow to generate personalized welcome text for Raj Kumar's portfolio.
 *
 * - personalizedWelcomeText - A function that generates the personalized welcome text.
 * - PersonalizedWelcomeTextInput - The input type for the personalizedWelcomeText function.
 * - PersonalizedWelcomeTextOutput - The return type for the personalizedWelcomeText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeTextInputSchema = z.object({
  visitorInterest: z
    .string()
    .describe('The visitor\'s primary interest (e.g., projects, skills, contact).'),
});
export type PersonalizedWelcomeTextInput = z.infer<typeof PersonalizedWelcomeTextInputSchema>;

const PersonalizedWelcomeTextOutputSchema = z.object({
  welcomeText: z.string().describe('The personalized welcome text for the visitor.'),
});
export type PersonalizedWelcomeTextOutput = z.infer<typeof PersonalizedWelcomeTextOutputSchema>;

export async function personalizedWelcomeText(
  input: PersonalizedWelcomeTextInput
): Promise<PersonalizedWelcomeTextOutput> {
  return personalizedWelcomeTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedWelcomeTextPrompt',
  input: {schema: PersonalizedWelcomeTextInputSchema},
  output: {schema: PersonalizedWelcomeTextOutputSchema},
  prompt: `You are creating a personalized welcome message for a visitor to Raj Kumar's portfolio website.
Raj Kumar is a B.Tech CSE student at Pimpri Chinchwad University (Class of 2027).

Key achievements to mention if relevant:
- 1st Rank in University Level Aptitude Competition.
- Smart India Hackathon 2025 Finalist.
- Winner/Runner-up at PCU Project Expo 2024.
- Skilled in Full-Stack Web Development, ML (Deepfake Detection), and Healthtech (Swasthya).
- Passionate about solving real-world problems.

Consider the visitor's interest and tailor the welcome message to highlight relevant information about Raj.

Visitor Interest: {{{visitorInterest}}}

Welcome Text: `,
});

const personalizedWelcomeTextFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeTextFlow',
    inputSchema: PersonalizedWelcomeTextInputSchema,
    outputSchema: PersonalizedWelcomeTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
