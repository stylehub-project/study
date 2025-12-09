'use server';

/**
 * @fileOverview Provides personalized study material recommendations for students based on their enrolled courses.
 *
 * - getPersonalizedStudyRecommendations - A function that returns personalized study material recommendations.
 * - PersonalizedStudyRecommendationsInput - The input type for the getPersonalizedStudyRecommendations function.
 * - PersonalizedStudyRecommendationsOutput - The return type for the getPersonalizedStudyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedStudyRecommendationsInputSchema = z.object({
  studentId: z.string().describe('The ID of the student.'),
  enrolledCourses: z.array(z.string()).describe('A list of the student\'s enrolled courses.'),
});
export type PersonalizedStudyRecommendationsInput = z.infer<typeof PersonalizedStudyRecommendationsInputSchema>;

const PersonalizedStudyRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of personalized study material recommendations.'),
});
export type PersonalizedStudyRecommendationsOutput = z.infer<typeof PersonalizedStudyRecommendationsOutputSchema>;

export async function getPersonalizedStudyRecommendations(
  input: PersonalizedStudyRecommendationsInput
): Promise<PersonalizedStudyRecommendationsOutput> {
  return personalizedStudyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStudyRecommendationsPrompt',
  input: {schema: PersonalizedStudyRecommendationsInputSchema},
  output: {schema: PersonalizedStudyRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized study material recommendations for students.

  Based on the student\'s enrolled courses, suggest relevant study materials.

  Student ID: {{{studentId}}}
  Enrolled Courses: {{#each enrolledCourses}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Provide a list of study material recommendations that will help the student improve their learning efficiency in these courses.
  The recommendations should be specific and actionable.
  `,
});

const personalizedStudyRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedStudyRecommendationsFlow',
    inputSchema: PersonalizedStudyRecommendationsInputSchema,
    outputSchema: PersonalizedStudyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
