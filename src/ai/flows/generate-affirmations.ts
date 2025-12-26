'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized affirmations based on user mood and needs.
 *
 * It exports:
 * - `generateAffirmation`: An async function that takes user mood and needs as input and returns a personalized affirmation.
 * - `GenerateAffirmationInput`: The type definition for the input object, containing mood and needs.
 * - `GenerateAffirmationOutput`: The type definition for the output object, containing the generated affirmation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAffirmationInputSchema = z.object({
  mood: z
    .string()
    .describe('The current mood of the user (e.g., happy, sad, anxious).'),
  needs: z
    .string()
    .describe(
      'Specific needs or areas the user wants to focus on (e.g., confidence, stress relief, self-compassion).'
    ),
});
export type GenerateAffirmationInput = z.infer<typeof GenerateAffirmationInputSchema>;

const GenerateAffirmationOutputSchema = z.object({
  affirmation: z
    .string()
    .describe('A personalized affirmation tailored to the user input.'),
});
export type GenerateAffirmationOutput = z.infer<typeof GenerateAffirmationOutputSchema>;

export async function generateAffirmation(input: GenerateAffirmationInput): Promise<GenerateAffirmationOutput> {
  return generateAffirmationFlow(input);
}

const generateAffirmationPrompt = ai.definePrompt({
  name: 'generateAffirmationPrompt',
  input: {schema: GenerateAffirmationInputSchema},
  output: {schema: GenerateAffirmationOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized affirmations to users based on their current mood and needs.

   mood: {{{mood}}}
   needs: {{{needs}}}

  Generate a single, positive, and encouraging affirmation that addresses the user's mood and helps them focus on their stated needs.
  The affirmation should be concise and easy to remember.
`,
});

const generateAffirmationFlow = ai.defineFlow(
  {
    name: 'generateAffirmationFlow',
    inputSchema: GenerateAffirmationInputSchema,
    outputSchema: GenerateAffirmationOutputSchema,
  },
  async input => {
    const {output} = await generateAffirmationPrompt(input);
    return output!;
  }
);
