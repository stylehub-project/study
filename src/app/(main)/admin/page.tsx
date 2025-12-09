import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function TeacherNewsUploadPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Weekly News</CardTitle>
        <CardDescription>
          Publish the news article for this week's reporting challenge.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="news-title">News Title</Label>
          <Input id="news-title" placeholder="e.g., The Future of Space Exploration" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="news-body">News Body</Label>
          <Textarea
            id="news-body"
            placeholder="Paste the news article here (200-350 words recommended)."
            rows={8}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="student-notes">Notes for Students (Optional)</Label>
          <Input id="student-notes" placeholder="e.g., Focus on clear pronunciation and confident delivery." />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="deadline">Set Deadline</Label>
                <Input id="deadline" type="date" />
            </div>
            <div className="flex items-end">
                <Button className="w-full">Upload News</Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}


export default function AdminPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline">Admin Panel</h1>
      
      <Tabs defaultValue="students" className="w-full">
        <TabsList>
            <TabsTrigger value="students">Manage Students</TabsTrigger>
            <TabsTrigger value="uploadNews">Upload News</TabsTrigger>
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

            <TabsContent value="uploadNews">
              <TeacherNewsUploadPanel />
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
