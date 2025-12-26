import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-checkin.ts';
import '@/ai/flows/generate-affirmations.ts';
import '@/ai/flows/provide-encouragement.ts';
import '@/ai/flows/answer-questions.ts';
