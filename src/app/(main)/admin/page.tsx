
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

function TeacherAnalyticsDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Analytics</CardTitle>
        <CardDescription>Overview of student engagement and performance.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Class Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-24 w-full" />
            <p className="text-xs text-muted-foreground mt-2">Who watched classes this week.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">News Club Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-24 w-full" />
             <p className="text-xs text-muted-foreground mt-2">Video submission status.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
             <ComingSoonBadge styleType="D">Detailed test & concept performance coming soon.</ComingSoonBadge>
             <Skeleton className="h-16 w-full mt-4" />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}


export default function AdminPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline">Admin Panel</h1>
      
      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="students">Manage Students</TabsTrigger>
            <TabsTrigger value="submissions">View Submissions</TabsTrigger>
            <TabsTrigger value="uploadNews">Upload News</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <div className="mt-6">
            <TabsContent value="students">
                <Card>
                    <CardHeader>
                        <CardTitle>Manage Students</CardTitle>
                        <CardDescription>View student progress and send feedback.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <ComingSoonBadge styleType="D">Full management tools coming soon.</ComingSoonBadge>
                         {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-full mt-4" />)}
                    </CardContent>
                </Card>
            </TabsContent>
            
            <TabsContent value="submissions">
              <Card>
                <CardHeader>
                  <CardTitle>View Submissions</CardTitle>
                  <CardDescription>Review student video submissions and AI feedback.</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-12">
                  <ComingSoonBadge styleType="F">Submissions Dashboard Coming Soon</ComingSoonBadge>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="uploadNews">
              <TeacherNewsUploadPanel />
            </TabsContent>
            
            <TabsContent value="analytics">
              <TeacherAnalyticsDashboard />
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
