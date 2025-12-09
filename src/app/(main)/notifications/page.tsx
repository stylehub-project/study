import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function NotificationsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
        <Card className="md:col-span-1 flex flex-col">
            <CardHeader>
                <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent className="flex-1 space-y-3 overflow-y-auto">
                 {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-1.5">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-3 w-2/3" />
                        </div>
                    </div>
                 ))}
            </CardContent>
        </Card>
        <Card className="md:col-span-2 flex items-center justify-center text-center relative overflow-hidden">
             <div className="absolute top-0 left-4 h-full w-8 bg-primary/10 animate-pulse flex items-center justify-center [writing-mode:vertical-rl] text-primary/50 text-xl font-bold tracking-widest uppercase">
                Coming Soon
            </div>
            <div>
                <h2 className="text-2xl font-bold font-headline">Messaging</h2>
                <p className="text-muted-foreground mt-2">Direct messaging and notifications are coming soon.</p>
            </div>
        </Card>
    </div>
  );
}
