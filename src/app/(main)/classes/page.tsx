import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesPage() {
  return (
    <div className="space-y-8">
       <h1 className="text-4xl font-bold font-headline text-center">Live Classes</h1>

       <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg bg-card-foreground/10 overflow-hidden flex items-center justify-center">
        <ComingSoonBadge styleType="E" className="text-5xl">Ink Reveal Coming Soon</ComingSoonBadge>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="lg:col-span-2">
                <CardHeader>
                    <Skeleton className="h-6 w-1/2" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-32 w-full" />
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-3">
                    {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}
                </CardContent>
            </Card>
       </div>
    </div>
  );
}
