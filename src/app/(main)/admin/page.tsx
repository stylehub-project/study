
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Activity, BookUp, MessageSquareWarning, CheckSquare, Search, Filter, MoreHorizontal, ChevronDown, Bot, FileText, Image as ImageIcon, CheckCircle, MessageCircleQuestion } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function AdminHeader() {
  const metrics = [
    { label: "Students Active Today", value: "245", icon: Activity },
    { label: "Classes Uploaded", value: "12", icon: BookUp },
    { label: "Doubts Solved", value: "56", icon: MessageSquareWarning },
    { label: "Submissions Pending", value: "8", icon: CheckSquare },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-primary/50">
            <AvatarFallback className="bg-primary/10">
              <User className="w-8 h-8 text-primary"/>
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold font-headline">Sunrise International Public School</h1>
            <p className="text-muted-foreground font-semibold">STUDY CLUB ADMIN PANEL</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map(metric => (
            <Card key={metric.label} className="p-3 text-center">
              <metric.icon className="w-6 h-6 text-primary/80 mx-auto mb-1 animate-pulse" />
              <p className="text-xl font-bold">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </Card>
          ))}
        </div>
      </div>
       <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-expand" />
    </div>
  )
}

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

function ManageStudentsPanel() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage Students</CardTitle>
                <CardDescription>View, edit, and manage all students in the system.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search students..." className="pl-10" />
                    </div>
                    <div className="flex-1 min-w-[150px]">
                        <Select disabled>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Class" />
                            </SelectTrigger>
                        </Select>
                    </div>
                     <div className="flex-1 min-w-[150px]">
                        <Select disabled>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Status" />
                            </SelectTrigger>
                        </Select>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> More Filters</Button>
                         <ComingSoonBadge styleType="A" />
                    </div>
                </div>

                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[40px]">
                                    <Checkbox disabled />
                                </TableHead>
                                <TableHead>Student Name</TableHead>
                                <TableHead>Class</TableHead>
                                <TableHead>Performance</TableHead>
                                <TableHead>Last Login</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[...Array(5)].map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell><Checkbox disabled /></TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-10 w-10 rounded-full" />
                                            <div className="space-y-1.5">
                                                <Skeleton className="h-4 w-32" />
                                                <Skeleton className="h-3 w-40" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="sm" disabled>View</Button>
                                            <Button variant="ghost" size="icon" disabled>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                 <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">Showing 1-5 of 245 students</p>
                    <div className="flex gap-2">
                        <Button variant="outline" disabled>Previous</Button>
                        <Button variant="outline" disabled>Next</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function ContentUploadSystem() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload AI Class Content</CardTitle>
            <CardDescription>
              Enter the details below. Our AI will generate an animated class from this content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Science" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chapter">Chapter</Label>
                <Input id="chapter" placeholder="e.g., Photosynthesis" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input id="topic" placeholder="e.g., Light-dependent Reactions" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select>
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="explanation">Content Input Box</Label>
              <Textarea
                id="explanation"
                placeholder="Enter explanation text, example problems, keywords, and steps here..."
                rows={12}
              />
            </div>
            <div className="flex justify-end gap-4">
                <Button variant="outline">Preview</Button>
                <Button>Publish Class</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="flex flex-col items-center justify-center text-center p-6 bg-muted/30">
          <Bot className="w-10 h-10 text-primary/80 mb-3"/>
          <CardTitle className="text-lg">AI Class Preview</CardTitle>
          <CardDescription className="text-xs">A preview of the generated class will appear here.</CardDescription>
          <Skeleton className="w-full aspect-video mt-4" />
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Other Uploads</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-lg bg-card-foreground/5">
                    <div className="flex items-center gap-3">
                      <FileText className="text-primary" />
                      <span className="font-bold text-sm">Notes (PDF, Image)</span>
                    </div>
                    <ComingSoonBadge styleType="A">Soon</ComingSoonBadge>
                </div>
                 <div className="flex items-center justify-between p-3 rounded-lg bg-card-foreground/5">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="text-primary" />
                      <span className="font-bold text-sm">Worksheets</span>
                    </div>
                    <ComingSoonBadge styleType="A">Soon</ComingSoonBadge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card-foreground/5">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-primary" />
                      <span className="font-bold text-sm">Question Bank</span>
                    </div>
                    <ComingSoonBadge styleType="A">Soon</ComingSoonBadge>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}


export default function AdminPage() {
  return (
    <div className="space-y-8">
      <AdminHeader />
      
      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="students">Manage Students</TabsTrigger>
            <TabsTrigger value="content">Content Upload</TabsTrigger>
            <TabsTrigger value="uploadNews">News Club</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="doubts">Doubt Review</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <div className="mt-6">
            <TabsContent value="students">
                <ManageStudentsPanel />
            </TabsContent>

            <TabsContent value="content">
                <ContentUploadSystem />
            </TabsContent>
            
            <TabsContent value="uploadNews">
              <TeacherNewsUploadPanel />
            </TabsContent>
            
            <TabsContent value="submissions">
              <Card>
                <CardHeader>
                  <CardTitle>View All Submissions</CardTitle>
                  <CardDescription>Review student submissions for assignments and news reports.</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-12">
                  <ComingSoonBadge styleType="F">Unified Submissions Dashboard Coming Soon</ComingSoonBadge>
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
                    <ComingSoonBadge styleType="E">AI Auto-Answer Feature Coming Soon</ComingSoonBadge>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <TeacherAnalyticsDashboard />
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
