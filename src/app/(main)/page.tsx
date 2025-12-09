
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { getPersonalizedStudyRecommendations } from "@/ai/flows/personalized-study-recommendations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

async function Recommendations() {
  if (!process.env.GEMINI_API_KEY) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>AI Quick Tips</CardTitle>
          <CardDescription>Personalized tips to boost your learning.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="mt-4">
            <ComingSoonBadge styleType="A">Add your Gemini API key</ComingSoonBadge>
          </div>
        </CardContent>
      </Card>
    )
  }

  const recommendations = await getPersonalizedStudyRecommendations({
    studentId: 'student-123',
    enrolledCourses: ['Calculus I', 'Introduction to Physics'],
  });

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>AI Quick Tips</CardTitle>
        <CardDescription>Personalized tips to boost your learning.</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Here's your learning snapshot for today.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col justify-center text-center">
            <CardHeader>
                <CardTitle>Attendance</CardTitle>
            </CardHeader>
            <CardContent>
                <ComingSoonBadge styleType="A">100%</ComingSoonBadge>
            </CardContent>
        </Card>
         <Card className="flex flex-col justify-center text-center">
            <CardHeader>
                <CardTitle>Today's Class</CardTitle>
            </CardHeader>
            <CardContent>
                 <ComingSoonBadge styleType="A">Physics 101</ComingSoonBadge>
            </CardContent>
        </Card>
         <Card className="flex flex-col justify-center text-center">
            <CardHeader>
                <CardTitle>Next Assignment</CardTitle>
            </CardHeader>
            <CardContent>
                 <ComingSoonBadge styleType="A">Calculus HW Due</ComingSoonBadge>
            </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 relative overflow-hidden">
          <ComingSoonBadge styleType="B">PROGRESS</ComingSoonBadge>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>Your progress in ongoing courses.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Calculus I</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Physics 101</span>
                <span className="text-muted-foreground">40%</span>
              </div>
              <Progress value={40} />
            </div>
             <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-full bg-muted/50" />
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
