import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BrainCircuit, Calendar, Flame, Map, Target } from "lucide-react";

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
                    <ComingSoonBadge styleType="D">Calendar view coming soon</ComingSoonBadge>
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
                    <ComingSoonBadge styleType="E">Heatmap arriving shortly</ComingSoonBadge>
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
        </div>
    </div>
  );
}
