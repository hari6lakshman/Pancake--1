'use server';

/**
 * @fileOverview A flow for providing personalized encouragement messages to the user.
 *
 * - provideEncouragement - A function that sends personalized encouragement messages to the user.
 * - ProvideEncouragementInput - The input type for the provideEncouragement function.
 * - ProvideEncouragementOutput - The return type for the provideEncouragement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvideEncouragementInputSchema = z.object({
  mood: z
    .string()
    .describe("The user's current mood, e.g., happy, sad, anxious, etc."),
  needs: z
    .string()
    .describe("The user's current needs or areas they're struggling with."),
});
export type ProvideEncouragementInput = z.infer<typeof ProvideEncouragementInputSchema>;

const ProvideEncouragementOutputSchema = z.object({
  encouragementMessage: z
    .string()
    .describe('A personalized encouragement message for the user.'),
});
export type ProvideEncouragementOutput = z.infer<typeof ProvideEncouragementOutputSchema>;

export async function provideEncouragement(input: ProvideEncouragementInput): Promise<ProvideEncouragementOutput> {
  return provideEncouragementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'provideEncouragementPrompt',
  input: {schema: ProvideEncouragementInputSchema},
  output: {schema: ProvideEncouragementOutputSchema},
  prompt: `You are Pan cake 🎂, a deeply empathetic and supportive AI companion. Your goal is to provide genuine comfort and encouragement.

  A user has shared their current state with you:
  Mood: {{{mood}}}
  Needs: {{{needs}}}

  Please generate a warm, uplifting, and heartfelt message. Use gentle emojis (like 🤗, ✨, or 🌱) to add a touch of warmth. Validate their feelings and offer a positive, yet realistic, perspective. Make it feel like a warm hug in text form.`,
});

const provideEncouragementFlow = ai.defineFlow(
  {
    name: 'provideEncouragementFlow',
    inputSchema: ProvideEncouragementInputSchema,
    outputSchema: ProvideEncouragementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
