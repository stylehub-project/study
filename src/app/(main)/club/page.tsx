import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Uploader } from "@/components/ui/uploader";

export default function ClubPage() {
  return (
    <div className="space-y-8">
      <div className="p-8 rounded-lg bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Welcome to the Sunrise Club</h1>
        <p className="mt-2 text-foreground/80">Your exclusive space for practice, feedback, and growth.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
                <CardTitle>Weekly Practice Uploads</CardTitle>
                <CardDescription>Submit your work for this week's challenge.</CardDescription>
            </CardHeader>
            <CardContent>
                <Uploader />
            </CardContent>
          </Card>
           <Card className="relative min-h-[200px] flex flex-col items-center justify-center text-center">
             <CardHeader>
                <CardTitle>Feedback Queue</CardTitle>
                <CardDescription>AI-powered feedback will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
                <ComingSoonBadge styleType="E">Holographic AI feedback system coming soon.</ComingSoonBadge>
            </CardContent>
          </Card>
        </div>

        <div className="lg:sticky lg:top-24">
            <Card>
                <CardHeader>
                    <CardTitle>Club Roster</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-24" />
                            </div>
                        </div>
                    ))}
                    <div className="pt-2">
                     <ComingSoonBadge styleType="A">Full roster coming soon</ComingSoonBadge>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
