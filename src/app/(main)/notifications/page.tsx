
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare, Users } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
        <Card className="md:col-span-1 flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold font-headline">My Messages</h2>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 overflow-y-auto">
                 {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
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
            <div className="relative">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <Users className="w-20 h-20 text-primary/30" />
                        <div className="absolute top-0 -right-2 animate-ping">
                           <ComingSoonBadge styleType="A">✍️</ComingSoonBadge>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold font-headline">Peer Discussions</h2>
                <p className="text-muted-foreground mt-2 max-w-sm mx-auto">A collaborative space to discuss topics with your classmates is coming soon!</p>
            </div>
        </Card>
    </div>
  );
}
