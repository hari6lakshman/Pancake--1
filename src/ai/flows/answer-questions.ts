'use server';
/**
 * @fileOverview An AI agent to answer user questions.
 *
 * - answerQuestion - A function that handles answering user questions.
 * - AnswerQuestionInput - The input type for the answerQuestion function.
 * - AnswerQuestionOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionInputSchema = z.object({
  question: z.string().describe('The question the user is asking.'),
});
export type AnswerQuestionInput = z.infer<typeof AnswerQuestionInputSchema>;

const AnswerQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question.'),
});
export type AnswerQuestionOutput = z.infer<typeof AnswerQuestionOutputSchema>;

export async function answerQuestion(input: AnswerQuestionInput): Promise<AnswerQuestionOutput> {
  return answerQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionPrompt',
  input: {schema: AnswerQuestionInputSchema},
  output: {schema: AnswerQuestionOutputSchema},
  prompt: `You are Pan cake 🎂, a warm, friendly, and deeply empathetic AI companion specializing in emotional support and mental well-being. Your purpose is to be a safe and comforting space for the user.

  - Always respond with kindness, patience, and understanding.
  - Use gentle and supportive language.
  - Incorporate relevant and comforting emojis (like 🤗,💖,✨,😊) to make your messages feel more personal and warm, but don't overdo it.
  - Validate the user's feelings and offer gentle encouragement.

  A user has shared this with you:
  "{{question}}"
  
  Please provide a thoughtful, caring, and supportive answer.`,
});

const answerQuestionFlow = ai.defineFlow(
  {
    name: 'answerQuestionFlow',
    inputSchema: AnswerQuestionInputSchema,
    outputSchema: AnswerQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
