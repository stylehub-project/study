
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hourglass } from "lucide-react";

function SmartRevisionCard() {
    return (
        <Card className="col-span-1 lg:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 flex flex-col items-center justify-center text-center p-8">
             <Hourglass className="w-16 h-16 text-primary/80 animate-spin" style={{ animationDuration: '3s' }}/>
             <h3 className="text-2xl font-bold font-headline mt-4">Smart Revision Mode</h3>
             <p className="text-muted-foreground mt-2">AI will create a personalized revision plan based on your weak spots.</p>
             <div className="mt-4">
                <ComingSoonBadge styleType="D">Coming Soon</ComingSoonBadge>
             </div>
        </Card>
    )
}


export default function LibraryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline text-center">Study Library</h1>
      
      <Tabs defaultValue="documents" className="w-full">
        <div className="flex justify-center">
            <TabsList>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="tests">Practice Tests</TabsTrigger>
            </TabsList>
        </div>

        <div className="mt-6 relative">
            <TabsContent value="documents">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-1">
                        <CardHeader>
                        <CardTitle>Documents</CardTitle>
                        <CardDescription>All your notes and materials in one place.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="space-y-3 pt-4">
                                {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
                            </div>
                        </CardContent>
                    </Card>
                    <SmartRevisionCard />
                </div>
            </TabsContent>
            <TabsContent value="videos">
                <Card>
                    <CardContent className="p-12 text-center">
                        <ComingSoonBadge styleType="F">Video Library Coming Soon</ComingSoonBadge>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="tests">
                <Card>
                    <CardContent className="p-12 text-center">
                        <ComingSoonBadge styleType="F">Practice Tests Coming Soon</ComingSoonBadge>
                    </CardContent>
                </Card>
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
