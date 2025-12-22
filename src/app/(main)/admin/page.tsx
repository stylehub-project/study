
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminCommandCenter } from "./components/admin-command-center";
import { ManageStudentsPanel } from "./components/manage-students-panel";
import { ContentUploadSystem } from "./components/content-upload-system";
import { TeacherNewsUploadPanel } from "./components/teacher-news-upload-panel";
import { TeacherAnalyticsDashboard } from "./components/teacher-analytics-dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { MessageCircleQuestion } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-8">
       <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">Admin Panel</h1>
        <p className="text-muted-foreground">Oversight, Moderation, Control & Management</p>
       </div>
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="students">Manage Students</TabsTrigger>
            <TabsTrigger value="content">Content Upload</TabsTrigger>
            <TabsTrigger value="uploadNews">News Club</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="doubts">Doubt Review</TabsTrigger>
        </TabsList>

        <div className="mt-6">
            <TabsContent value="dashboard">
                <AdminCommandCenter />
            </TabsContent>

            <TabsContent value="students">
                <ManageStudentsPanel />
            </TabsContent>

            <TabsContent value="content">
                <ContentUploadSystem />
            </TabsContent>
            
            <TabsContent value="uploadNews">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <TeacherNewsUploadPanel />
                    </div>
                    <div>
                        <TeacherAnalyticsDashboard />
                    </div>
                </div>
            </TabsContent>
            
            <TabsContent value="submissions">
              <Card>
                <CardHeader>
                  <CardTitle>View All Submissions</CardTitle>
                  <CardDescription>Review student submissions for assignments and news reports.</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-12">
                  <ComingSoonBadge styleType="F">Unified Submissions Dashboard</ComingSoonBadge>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="doubts">
              <Card>
                <CardHeader>
                  <CardTitle>Doubt Review</CardTitle>
                  <CardDescription>View, assign, and answer student questions.</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-12 flex flex-col items-center">
                    <MessageCircleQuestion className="w-16 h-16 text-primary/30 mb-4" />
                    <ComingSoonBadge styleType="E">AI Auto-Answer</ComingSoonBadge>
                </CardContent>
              </Card>
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
