

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { getPersonalizedStudyRecommendations } from "@/ai/flows/personalized-study-recommendations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Target, Calendar, CheckCircle } from "lucide-react";

async function Recommendations() {
  // Gracefully handle missing API key
  let recommendations;
  try {
    if (process.env.GEMINI_API_KEY) {
      recommendations = await getPersonalizedStudyRecommendations({
        studentId: 'student-123',
        enrolledCourses: ['Calculus I', 'Introduction to Physics'],
      });
    }
  } catch (error) {
    console.error("Error fetching recommendations, displaying fallback.", error);
  }


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>AI Quick Tips</CardTitle>
        <CardDescription>Personalized tips to boost your learning.</CardDescription>
      </CardHeader>
      <CardContent>
        {recommendations ? (
          <>
            <ul className="space-y-2 text-sm text-card-foreground">
              {recommendations.recommendations.slice(0, 3).map((rec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">◆</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <ComingSoonBadge styleType="C">Curated tips...</ComingSoonBadge>
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="mt-4">
              <ComingSoonBadge styleType="A">Add your Gemini API key</ComingSoonBadge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function QuickStatCard({ icon: Icon, title }: { icon: React.ElementType, title: string }) {
    return (
        <Card className="p-4">
            <CardContent className="flex flex-col items-center justify-center text-center space-y-3">
                <div className="p-3 bg-muted rounded-full">
                    <Icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16 mx-auto" />
                </div>
                <ComingSoonBadge styleType="E" className="text-xs !font-bold">Data Coming Soon</ComingSoonBadge>
            </CardContent>
        </Card>
    );
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold font-headline">Hello, Student!</h1>
        <p className="text-muted-foreground">Welcome to Study Club Dashboard</p>
        <div className="mt-2">
            <ComingSoonBadge styleType="A" as="div" className="inline-block">Complete Profile – ✍️ Coming Soon</ComingSoonBadge>
        </div>
        <div className="mt-4 w-full max-w-sm h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-expand" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickStatCard icon={CheckCircle} title="Attendance Snapshot" />
        <QuickStatCard icon={Calendar} title="Today's Timetable" />
        <QuickStatCard icon={Clock} title="Next Due Assignment" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 relative overflow-hidden p-6 flex flex-col">
          <ComingSoonBadge styleType="B">COMING SOON</ComingSoonBadge>
          <CardHeader className="p-0 z-10">
            <CardTitle>Your Weekly Goals</CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4 flex-1 flex flex-col z-10">
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-full" hasShimmer />
            </div>
            <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>
                    <Skeleton className="h-4 flex-1" />
                </li>
                 <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>
                    <Skeleton className="h-4 flex-1" />
                </li>
                 <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>
                    <Skeleton className="h-4 flex-1" />
                </li>
            </ul>
             <div className="mt-auto pt-4">
                <Button variant="outline" disabled className="border-primary/50 text-primary/80">Set Goals – ✍️ Coming Soon</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-md bg-card-foreground/5">
                <span className="text-sm">Finish Physics homework</span>
                <Button variant="ghost" size="icon" className="h-8 w-8"><ArrowRight /></Button>
              </div>
              <div className="flex items-center justify-between p-2 rounded-md bg-card-foreground/5">
                <span className="text-sm">Review Calculus notes</span>
                 <Button variant="ghost" size="icon" className="h-8 w-8"><ArrowRight /></Button>
              </div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Weekly Focus</CardTitle>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-8 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
         <Card className="md:col-span-2 text-center flex flex-col justify-center items-center p-8">
             <h2 className="text-2xl font-bold font-headline mb-4">Student Resources</h2>
             <ComingSoonBadge styleType="D">New resources coming soon!</ComingSoonBadge>
        </Card>
        <Recommendations />
      </div>

    </div>
  );
}
