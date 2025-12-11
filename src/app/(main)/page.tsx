'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Bot, Calendar, CheckCircle, Clock, Flame, HelpCircle, Library, Sparkles, Sun, Upload } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function DashboardHeader() {
  const [greeting, setGreeting] = useState("Hello, Student!");
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar-1');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning, Student!");
    } else if (hour < 18) {
      setGreeting("Good Afternoon, Student!");
    } else {
      setGreeting("Good Evening, Student!");
    }
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/profile">
            <Avatar className="w-14 h-14 border-2 border-primary/50 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User avatar" />}
                <AvatarFallback className="bg-primary/20 text-primary">S</AvatarFallback>
            </Avatar>
        </Link>
        <div>
            <div className="relative inline-block">
                <h1 className="text-3xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground animate-shimmer-text">
                    {greeting}
                </h1>
                <style jsx>{`
                    @keyframes shimmer-text {
                        0% { background-position: -200% center; }
                        100% { background-position: 200% center; }
                    }
                    .animate-shimmer-text {
                        background-size: 200% auto;
                        animation: shimmer-text 5s linear infinite;
                    }
                `}</style>
            </div>
            <p className="text-muted-foreground">Ready to start your day?</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-primary bg-primary/10 p-3 rounded-full shadow-inner">
        <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse"></div>
            <Flame className="w-5 h-5 z-10"/>
        </div>
        <div className="text-right">
            <p className="font-bold text-lg">5</p>
            <p className="text-xs -mt-1">Day Streak</p>
        </div>
      </div>
    </div>
  );
}

function LearningPlanCard() {
    return (
        <Card className="shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
                <CardTitle className="text-2xl">Today's Learning Plan</CardTitle>
                <CardDescription>Your personalized session for today.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="font-semibold text-card-foreground">Maths → Fractions</p>
                        <p className="text-sm text-muted-foreground">12 min AI Class</p>
                    </div>
                    <Sparkles className="ml-auto text-yellow-500"/>
                </div>
                 <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="p-3 bg-secondary/20 rounded-full">
                        <HelpCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                        <p className="font-semibold text-card-foreground">Quick Revision</p>
                        <p className="text-sm text-muted-foreground">5 MCQs</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="p-3 bg-teal-500/20 rounded-full">
                        <Upload className="w-6 h-6 text-teal-500" />
                    </div>
                    <div>
                        <p className="font-semibold text-card-foreground">Practice Task</p>
                        <p className="text-sm text-muted-foreground">1 writing task</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="gap-4">
                <Button size="lg" className="flex-1">Start Plan</Button>
                <Button size="lg" variant="outline" className="flex-1">Customize</Button>
            </CardFooter>
        </Card>
    )
}

function QuickAccessTile({ href, icon: Icon, title, subtitle, progress, className, children }: { href: string; icon: React.ElementType, title: string; subtitle: string; progress?: number; className?: string, children?: React.ReactNode }) {
    return (
        <Link href={href} className="block">
            <Card className={cn("group h-full flex flex-col p-4 transition-all duration-300 hover:bg-card/90 hover:shadow-primary/20 hover:-translate-y-1", className)}>
                <div className="flex-1 space-y-2">
                    <div className="p-3 bg-primary/10 rounded-full w-fit text-primary">
                        <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
                {progress !== undefined && (
                    <div className="mt-4">
                        <Progress value={progress} className="h-2" />
                    </div>
                )}
                {children}
            </Card>
        </Link>
    )
}


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
            <LearningPlanCard />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            <QuickAccessTile 
                href="/classes/science" 
                icon={BookOpen} 
                title="Continue Learning"
                subtitle="AI Class: Photosynthesis"
                progress={75}
            />
            <QuickAccessTile 
                href="#" 
                icon={Bot} 
                title="Doubts"
                subtitle="2 pending"
                className="relative overflow-hidden"
            >
                <div className="absolute top-4 right-4 text-primary animate-pulse">
                    <Bot className="w-8 h-8" />
                </div>
            </QuickAccessTile>
             <QuickAccessTile 
                href="/library" 
                icon={Library} 
                title="Study Material"
                subtitle="Notes & Worksheets"
            />
            <QuickAccessTile 
                href="/club" 
                icon={Sun} 
                title="News Club"
                subtitle="Submission due Sunday"
            />
        </div>
      </div>
    </div>
  );
}
