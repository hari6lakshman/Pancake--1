'use server';

/**
 * @fileOverview Summarizes a user's mood check-in history to identify emotional trends.
 *
 * - summarizeCheckin - A function that summarizes the mood check-in history.
 * - SummarizeCheckinInput - The input type for the summarizeCheckin function.
 * - SummarizeCheckinOutput - The return type for the summarizeCheckin function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCheckinInputSchema = z.object({
  checkinHistory: z
    .string()
    .describe(
      'A string containing the user check-in history.  Each line should represent a checkin.
      Include date and mood.'
    ),
});
export type SummarizeCheckinInput = z.infer<typeof SummarizeCheckinInputSchema>;

const SummarizeCheckinOutputSchema = z.object({
  summary: z.string().describe('A summary of the user check-in history.'),
});
export type SummarizeCheckinOutput = z.infer<typeof SummarizeCheckinOutputSchema>;

export async function summarizeCheckin(input: SummarizeCheckinInput): Promise<SummarizeCheckinOutput> {
  return summarizeCheckinFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCheckinPrompt',
  input: {schema: SummarizeCheckinInputSchema},
  output: {schema: SummarizeCheckinOutputSchema},
  prompt: `You are an AI assistant designed to analyze mood check-in history and identify emotional trends.

  Summarize the following check-in history to identify patterns and understand emotional trends over time.
  Be concise.
  Check-in History:\n{{{checkinHistory}}}`,
});

const summarizeCheckinFlow = ai.defineFlow(
  {
    name: 'summarizeCheckinFlow',
    inputSchema: SummarizeCheckinInputSchema,
    outputSchema: SummarizeCheckinOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
