
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BrainCircuit, Calendar, Flame, Map, Target, Bot, Award, Star, FileQuestion } from "lucide-react";

function ConceptMasteryMap() {
    return (
        <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Map />Concept Mastery Map</CardTitle>
                <CardDescription>Your visual learning journey. Green is mastered, yellow needs review.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <ComingSoonBadge styleType="B">GALAXY MAP</ComingSoonBadge>
                <p className="text-muted-foreground mt-4">A visual map of all your chapters will appear here.</p>
            </CardContent>
        </Card>
    )
}

function ProgressTimeline() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calendar />Progress Timeline</CardTitle>
                <CardDescription>Your daily study activity at a glance.</CardDescription>
            </CardHeader>
            <CardContent>
                <Skeleton className="w-full h-48" />
                <div className="text-center mt-4">
                    <ComingSoonBadge styleType="D">Calendar view</ComingSoonBadge>
                </div>
            </CardContent>
        </Card>
    )
}

function SkillHeatmap() {
    return (
        <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Flame />Skill Heatmap</CardTitle>
                <CardDescription>Your strengths and weaknesses across subjects.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Skeleton className="w-full h-32" />
                 <div className="text-center mt-4">
                    <ComingSoonBadge styleType="E">Heatmap arriving</ComingSoonBadge>
                </div>
            </CardContent>
        </Card>
    )
}

function LearningEfficiencyMeter() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Target />Efficiency Meter</CardTitle>
                <CardDescription>Insights to optimize your study habits.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Card className="bg-primary/10 p-3 text-center border-primary/20">
                    <p className="text-sm font-medium text-primary/90">"You learn fastest in the evening. Try Maths between 6-7 PM."</p>
                </Card>
            </CardContent>
        </Card>
    )
}

function ScoreCards() {
    return (
        <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Award />Score Cards</CardTitle>
                <CardDescription>Your performance across different skills.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                    <Card key={i} className="p-4 text-center">
                        <Skeleton className="h-5 w-2/3 mx-auto" />
                        <Skeleton className="h-8 w-1/2 mx-auto mt-2" />
                        <Skeleton className="h-12 w-full mt-4" />
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}

function AiSuggestionsPanel() {
    return (
        <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot />AI Suggestions</CardTitle>
                <CardDescription>Personalized feedback to guide your learning.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
                <Card className="p-4 bg-muted/50">
                    <h4 className="font-semibold flex items-center gap-2 text-green-400"><Star className="w-4 h-4"/>What you did well</h4>
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                </Card>
                <Card className="p-4 bg-muted/50">
                    <h4 className="font-semibold flex items-center gap-2 text-yellow-400"><BrainCircuit className="w-4 h-4"/>What to improve</h4>
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                </Card>
                <Card className="p-4 bg-muted/50">
                    <h4 className="font-semibold flex items-center gap-2 text-blue-400"><Target className="w-4 h-4"/>What to do today</h4>
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                </Card>
            </CardContent>
        </Card>
    )
}

function ExamSimulatorCard() {
    return (
        <Card className="flex flex-col items-center justify-center text-center p-8 relative">
             <div className="absolute inset-0 bg-grid-zinc-800/10 [mask-image:linear-gradient(to_bottom,white_0,white_75%,transparent_100%)]"></div>
            <FileQuestion className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold font-headline">AI Exam Simulator</h3>
            <p className="text-muted-foreground mt-2">Generate mock tests and practice under exam conditions.</p>
            <div className="mt-4">
                <ComingSoonBadge styleType="E">Pencil auto-writing</ComingSoonBadge>
            </div>
        </Card>
    );
}

export default function ReportsPage() {
  return (
    <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">Progress &amp; Analytics</h1>
            <p className="text-muted-foreground mt-2">Track your learning journey and discover insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <ConceptMasteryMap />
            <ProgressTimeline />
            <SkillHeatmap />
            <LearningEfficiencyMeter />
            <ScoreCards />
            <AiSuggestionsPanel />
            <ExamSimulatorCard />
        </div>
    </div>
  );
}
