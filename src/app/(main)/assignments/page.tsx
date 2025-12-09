'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Uploader } from "@/components/ui/uploader";

function AssignmentScanner() {
  return (
    <Card className="relative overflow-hidden mt-8 border-primary/20 bg-primary/5">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-primary/50 animate-pulse" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-40px); }
          100% { transform: translateY(40px); }
        }
        .animate-scan {
          animation: scan 3s infinite alternate ease-in-out;
        }
      `}</style>
      <CardHeader>
        <CardTitle>Assignment Scanner</CardTitle>
        <CardDescription>Click a photo of your handwritten work to get instant feedback.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <ComingSoonBadge styleType="E">AI Scanner Coming Soon</ComingSoonBadge>
      </CardContent>
    </Card>
  )
}


export default function AssignmentsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-8">
        <h1 className="text-4xl font-bold font-headline">Assignments</h1>
        
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>
                    Assignments will appear here when available.
                    <ComingSoonBadge styleType="A" className="ml-2">Teachers will publish weekly assignments.</ComingSoonBadge>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-card-foreground/5">
                        <Skeleton className="h-12 w-12 rounded-md" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                        <Skeleton className="h-8 w-20 rounded-full" />
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>

      <div className="lg:sticky lg:top-24">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Submit Your Work</CardTitle>
            <CardDescription>Upload your video, audio, or document submission.</CardDescription>
          </CardHeader>
          <CardContent>
            <Uploader />
          </CardContent>
        </Card>
        <AssignmentScanner />
      </div>
    </div>
  );
}
