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
Raj Kumar is a third-year B.Tech CSE student at Pimpri Chinchwad University.

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
