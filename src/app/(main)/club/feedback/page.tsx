'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, ThumbsUp, AlertTriangle, AlertCircle, Play, Pause, Bot } from "lucide-react";

const feedbackData = [
    { metric: "Pronunciation", rating: "Excellent", value: 95, tips: ["Your enunciation of complex words was very clear."] },
    { metric: "Flow", rating: "Good", value: 85, tips: ["A few more natural pauses would make your delivery even smoother."] },
    { metric: "Confidence", rating: "Excellent", value: 98, tips: ["You appeared very confident and engaging throughout."] },
    { metric: "Pace", rating: "Needs Work", value: 65, tips: ["Try to slow down slightly during the introduction to let the main points sink in."] },
    { metric: "Eye Contact", rating: "Good", value: 80, tips: ["Great job looking at the camera. Try to maintain it for longer stretches."] },
    { metric: "Expression", rating: "Good", value: 78, tips: ["Your facial expressions matched the tone of the news well."] },
    { metric: "Clarity", rating: "Excellent", value: 92, tips: ["Your message was communicated with outstanding clarity."] },
    { metric: "Professional Tone", rating: "Improving Required", value: 55, tips: ["Remember to use a formal tone. Avoid using slang words like 'gonna' or 'wanna'."] },
];

const ratingConfig = {
    "Excellent": { icon: Star, color: "text-green-500", bgColor: "bg-green-500/20" },
    "Good": { icon: ThumbsUp, color: "text-blue-500", bgColor: "bg-blue-500/20" },
    "Needs Work": { icon: AlertTriangle, color: "text-yellow-500", bgColor: "bg-yellow-500/20" },
    "Improving Required": { icon: AlertCircle, color: "text-red-500", bgColor: "bg-red-500/20" },
};

function FeedbackCard({ metric, rating, value, tips }: typeof feedbackData[0]) {
    const config = ratingConfig[rating as keyof typeof ratingConfig];
    const Icon = config.icon;

    return (
        <Card className={`border-l-4 ${config.bgColor.replace('bg-', 'border-')}`}>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                    <span>{metric}</span>
                     <span className={`text-sm font-semibold flex items-center gap-2 ${config.color}`}>
                        <Icon className="w-4 h-4" />
                        {rating}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Progress value={value} className="h-2" />
                <ul className="mt-4 list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    {tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
            </CardContent>
        </Card>
    )
}

function VideoPlayback() {
    return (
        <Card className="lg:sticky lg:top-24">
            <CardHeader>
                <CardTitle>Your Submission Analysis</CardTitle>
                <CardDescription>Click on the markers to see AI feedback.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                    <Skeleton className="w-full h-full" />
                </div>
                <div className="relative h-10">
                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded-full absolute top-1/2 -translate-y-1/2" />
                    <div className="h-1.5 w-3/4 bg-primary rounded-full absolute top-1/2 -translate-y-1/2" />
                    
                    {/* Markers */}
                    <div title="Unclear word" className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-background cursor-pointer" style={{ left: '20%' }} />
                    <div title="Spoke too fast" className="absolute top-1/2 -translatey-1/2 w-4 h-4 rounded-full bg-yellow-500 border-2 border-background cursor-pointer" style={{ left: '45%' }} />
                    <div title="Long pause" className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-background cursor-pointer" style={{ left: '60%' }} />

                </div>
                 <div className="flex items-center justify-center gap-4 mt-4">
                    <Button variant="ghost" size="icon"><Play /></Button>
                    <p className="text-sm text-muted-foreground">0:23 / 1:30</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function FeedbackPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">AI Feedback Report</h1>
            <p className="text-muted-foreground mt-2">Here's a breakdown of your news report submission.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
                <VideoPlayback />
            </div>

            <div className="lg:col-span-2 space-y-4">
                <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4 flex items-start gap-4">
                        <div className="p-2 bg-primary/20 rounded-full">
                            <Bot className="w-6 h-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary">AI Coach Summary</h4>
                            <p className="text-sm text-primary/90 mt-1">"Overall, a strong performance! Your confidence is a great asset. Let's focus on refining your pacing to make your next report even more impactful. See the detailed suggestions below."</p>
                        </div>
                    </CardContent>
                </Card>
                {feedbackData.map((item) => (
                    <FeedbackCard key={item.metric} {...item} />
                ))}
            </div>
        </div>
    </div>
  );
}
