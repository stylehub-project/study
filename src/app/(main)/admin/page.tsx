import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline">Admin Panel</h1>
      
      <Tabs defaultValue="students" className="w-full">
        <TabsList>
            <TabsTrigger value="students">Manage Students</TabsTrigger>
            <TabsTrigger value="assignments">Create Assignments</TabsTrigger>
            <TabsTrigger value="roster">Club Roster</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <div className="mt-6">
            <TabsContent value="students">
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Students</CardTitle>
                        <ComingSoonBadge styleType="A">Full management tools coming soon.</ComingSoonBadge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                         {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
                    </CardContent>
                </Card>
            </TabsContent>
            
            {[ 'assignments', 'roster', 'analytics'].map(tab => (
                 <TabsContent value={tab} key={tab}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="capitalize">{tab}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center p-12">
                            <ComingSoonBadge styleType="D">{`'${tab}' section is under construction.`}</ComingSoonBadge>
                        </CardContent>
                    </Card>
                </TabsContent>
            ))}
        </div>
      </Tabs>
    </div>
  );
}
