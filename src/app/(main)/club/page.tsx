'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { cn } from "@/lib/utils";
import { Award, BarChart2, FileText, Send, Video } from "lucide-react";
import Link from "next/link";

function SubmissionTimeline() {
    const steps = [
        { day: "Mon", task: "News Released", active: true },
        { day: "Tue-Fri", task: "Practice Writing", active: true },
        { day: "Sat", task: "Record Video", active: false },
        { day: "Sun", task: "Submission Deadline", active: false },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border -translate-y-1/2" />
                    <div className="relative flex justify-between">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center w-24">
                                <div className={cn(
                                    "w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                    step.active ? "bg-primary border-primary/50" : "bg-muted border-border"
                                )}>
                                    {step.active && <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />}
                                </div>
                                <p className="mt-2 text-sm font-semibold">{step.day}</p>
                                <p className="text-xs text-muted-foreground">{step.task}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default function ClubPage() {
  return (
    <div className="space-y-8">
      <div className="relative p-8 rounded-lg bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-50 animate-pulse"></div>
        <div className="relative z-10">
            <h1 className="text-4xl font-bold font-headline text-primary">Sunrise News Club</h1>
            <p className="mt-2 text-foreground/80 max-w-xl mx-auto">
                Learn reporting. Improve speaking. Build confidence.
            </p>
        </div>
      </div>

       <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" variant="outline" asChild>
          <Link href="/club/writing-practice">
            <FileText className="mr-2 h-5 w-5" />
            This Week’s News
          </Link>
        </Button>
        <Button size="lg" variant="outline">
          <Video className="mr-2 h-5 w-5" />
          My Submissions
        </Button>
        <Button size="lg" asChild>
          <Link href="/club/feedback">
            <Send className="mr-2 h-5 w-5" />
            AI Feedback Reports
          </Link>
        </Button>
      </div>

      <SubmissionTimeline />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <Card className="text-center flex flex-col items-center justify-center p-8">
            <BarChart2 className="w-12 h-12 text-primary/50 mb-4" />
            <h3 className="text-2xl font-bold font-headline">Leaderboard</h3>
            <div className="mt-4">
                <ComingSoonBadge styleType="E">Leaderboard Coming Soon</ComingSoonBadge>
            </div>
        </Card>
        <Card className="text-center flex flex-col items-center justify-center p-8">
            <Award className="w-12 h-12 text-primary/50 mb-4" />
            <h3 className="text-2xl font-bold font-headline">Badges & Rewards</h3>
            <div className="mt-4">
                <ComingSoonBadge styleType="E">Rewards System Coming Soon</ComingSoonBadge>
            </div>
        </Card>
      </div>
    </div>
  );
}
