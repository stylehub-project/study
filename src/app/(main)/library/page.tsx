import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
             <ComingSoonBadge styleType="B">MATERIALS</ComingSoonBadge>
            <TabsContent value="documents">
                <Card>
                    <CardHeader>
                       <CardTitle>Documents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-center">
                         <ComingSoonBadge styleType="D">Masked gradient shimmer coming soon</ComingSoonBadge>
                         <div className="space-y-3 pt-4">
                            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
                         </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="videos">
                <Card>
                    <CardContent className="p-6 text-center">
                         <p className="text-muted-foreground">Video library is coming soon.</p>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="tests">
                <Card>
                    <CardContent className="p-6 text-center">
                         <p className="text-muted-foreground">Practice tests are coming soon.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
