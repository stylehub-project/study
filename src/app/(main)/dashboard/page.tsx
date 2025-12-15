'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Bot, Calendar, CheckCircle, Clock, Flame, HelpCircle, Library, Sparkles, Sun, Upload, Star, X } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";


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

function WelcomeCard({ onDismiss }: { onDismiss: () => void }) {
  return (
    <Card className="relative bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border-primary/20 shadow-2xl">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-6 w-6" onClick={onDismiss}>
        <X className="h-4 w-4" />
      </Button>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Welcome to Sunrise Study Club!</CardTitle>
        <CardDescription>Your personal AI-powered learning space is ready.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Here are a few things you can do to get started:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/classes">
            <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all h-full">
              <h4 className="font-bold flex items-center gap-2"><BookOpen />Explore AI Classes</h4>
              <p className="text-sm text-muted-foreground mt-1">Watch AI-animated lessons on various subjects.</p>
            </div>
          </Link>
          <Link href="/club">
            <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all h-full">
              <h4 className="font-bold flex items-center gap-2"><Sun />Join the News Club</h4>
              <p className="text-sm text-muted-foreground mt-1">Practice public speaking and get AI feedback.</p>
            </div>
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onDismiss} className="w-full">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
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

function WeeklyMissionsPanel() {
    const missions = [
        { id: 'mission-1', text: 'Complete 3 AI Classes', completed: true, progress: 100 },
        { id: 'mission-2', text: 'Submit 1 News Reporting', completed: true, progress: 100 },
        { id: 'mission-3', text: 'Finish 2 Doubt Questions', completed: false, progress: 50 },
        { id: 'mission-4', text: 'Score 70%+ in weekly quiz', completed: false, progress: 0 },
    ];
    return (
        <Card>
            <CardHeader>
                <CardTitle>This Week's Missions</CardTitle>
                <CardDescription>Complete missions to earn badges!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {missions.map(mission => (
                    <div key={mission.id} className="space-y-2">
                        <div className="flex items-center gap-3">
                            <Checkbox id={mission.id} checked={mission.completed} className="[&[data-state=checked]]:bg-green-500"/>
                            <label htmlFor={mission.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {mission.text}
                            </label>
                            {mission.completed && <Star className="w-4 h-4 text-yellow-400 animate-pulse" />}
                        </div>
                        <Progress value={mission.progress} className="h-2" />
                    </div>
                ))}
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
                Badges like "Concept Master" and "Clear Speaker" unlock on Sunday.
            </CardFooter>
        </Card>
    );
}

function PerformanceSnapshot() {
    const chartData = [{ name: 'Strong', value: 70, fill: 'hsl(var(--primary))' }, { name: 'Weak', value: 30, fill: 'hsl(var(--muted))' }];
    const chartConfig = {
        strong: { label: 'Strong', color: 'hsl(var(--primary))' },
        weak: { label: 'Weak', color: 'hsl(var(--muted))' }
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Concept Strength</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                    <ChartContainer config={chartConfig} className="h-24 w-24">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={25} strokeWidth={2} />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-base">Reading & Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Speaking Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-3xl font-bold">8.5<span className="text-sm text-muted-foreground">/10</span></p>
                    <p className="text-xs text-muted-foreground">Confidence + Clarity</p>
                </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center p-4 bg-card/50 border-dashed">
                <CardTitle className="text-base">Homework Pending</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Coming Soon</p>
            </Card>
        </div>
    )
}

export default function DashboardPage() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // This check ensures localStorage is only accessed on the client side.
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setShowWelcome(true);
    }
  }, []);

  const handleDismissWelcome = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setShowWelcome(false);
  };
  
  return (
    <div className="space-y-8">
      <DashboardHeader />
      
      {showWelcome && <WelcomeCard onDismiss={handleDismissWelcome} />}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
            <LearningPlanCard />
            <WeeklyMissionsPanel />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-6 content-start">
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
      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Performance Snapshot</h2>
        <PerformanceSnapshot />
      </div>
    </div>
  );
}

    