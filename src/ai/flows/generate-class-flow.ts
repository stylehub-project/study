'use server';

/**
 * @fileOverview Generates an AI-powered animated class from teacher input.
 *
 * - generateClass - A function that handles the class generation process.
 * - GenerateClassInput - The input type for the generateClass function.
 * - GenerateClassOutput - The return type for the generateClass function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const GenerateClassInputSchema = z.object({
  subject: z.string().describe('The subject of the class (e.g., Maths, Science).'),
  classLevel: z.string().describe('The grade level for the class (e.g., 10).'),
  chapter: z.string().describe('The name of the chapter.'),
  topic: z.string().describe('The specific topic within the chapter.'),
  difficulty: z.string().describe('The difficulty level (e.g., Basic, Medium, Advanced).'),
  teachingStyle: z.string().describe('The style of teaching (e.g., Board Teaching, Conceptual, Story-based).'),
  explanation: z.string().describe('The main explanation text, including steps, definitions, examples, and common mistakes.'),
  keywords: z.string().optional().describe('Important keywords to emphasize.'),
  voiceStyle: z.string().describe('The desired voice style for narration (e.g., Normal Teacher, Friendly, Energetic).'),
  boardColor: z.string().describe('The preferred color for the virtual blackboard.'),
});
export type GenerateClassInput = z.infer<typeof GenerateClassInputSchema>;

export const GenerateClassOutputSchema = z.object({
  lessonPlan: z.string().describe('A structured lesson plan with introduction, key points, examples, and a summary.'),
  boardActions: z.array(z.string()).describe('A sequence of actions for the animated board (e.g., "WRITE: Title", "HIGHLIGHT: Keyword").'),
});
export type GenerateClassOutput = z.infer<typeof GenerateClassOutputSchema>;

export async function generateClass(input: GenerateClassInput): Promise<GenerateClassOutput> {
  return generateClassFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateClassPrompt',
  input: { schema: GenerateClassInputSchema },
  output: { schema: GenerateClassOutputSchema },
  prompt: `You are an expert instructional designer. Your task is to convert a teacher's notes into a structured, engaging, and animated lesson plan for an AI-powered classroom.

  Teacher's Input:
  - Subject: {{{subject}}}
  - Class Level: {{{classLevel}}}
  - Chapter: {{{chapter}}}
  - Topic: {{{topic}}}
  - Difficulty: {{{difficulty}}}
  - Teaching Style: {{{teachingStyle}}}
  - Explanation: {{{explanation}}}
  - Keywords: {{{keywords}}}
  - Voice Style: {{{voiceStyle}}}
  - Board Color: {{{boardColor}}}

  Your Task:
  1.  **Create a Lesson Plan**: Based on the explanation, structure a clear lesson plan. It must include:
      - A brief, engaging introduction.
      - A list of 3-5 main key points.
      - At least one clear example from the text.
      - A concise summary.

  2.  **Generate Board Actions**: Create a list of commands for an animated whiteboard. The actions should be simple and clear. Start with writing the topic, then the explanation, highlighting keywords, and finally drawing a simple diagram if applicable.
      - Example actions: "WRITE: Photosynthesis Definition", "HIGHLIGHT: Chlorophyll", "DRAW: Simple diagram of a plant cell".

  Produce the final output in the required JSON format.
  `,
});

const generateClassFlow = ai.defineFlow(
  {
    name: 'generateClassFlow',
    inputSchema: GenerateClassInputSchema,
    outputSchema: GenerateClassOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
