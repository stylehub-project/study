'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Activity, BookUp, MessageSquareWarning, CheckSquare, Search, Filter, MoreHorizontal, ChevronDown, Bot, FileText, Image as ImageIcon, CheckCircle, MessageCircleQuestion, FolderKanban, Book, Palette, Mic, PenLine, Tv, Zap, Upload, HelpingHand, FileQuestion } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateClass, type GenerateClassInput, type GenerateClassOutput } from "@/ai/flows/generate-class-flow";
import { useContext, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { ClassContext, AIClass } from "@/context/ClassContext";
import { useToast } from "@/hooks/use-toast";

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
  const { addClass } = useContext(ClassContext);
  const { toast } = useToast();
  const [formState, setFormState] = useState<Partial<GenerateClassInput>>({
    subject: 'maths',
    classLevel: '10',
    difficulty: 'medium',
    teachingStyle: 'board',
    voiceStyle: 'teacher',
    boardColor: 'auto',
    chapter: '',
    topic: '',
    explanation: '',
    keywords: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [previewProgress, setPreviewProgress] = useState(0);
  const [previewResult, setPreviewResult] = useState<GenerateClassOutput | null>(null);


  const handleInputChange = (field: keyof GenerateClassInput, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: keyof GenerateClassInput) => (value: string) => {
    handleInputChange(field, value);
  };

  const handlePublish = async () => {
    setIsLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 500);

    try {
      const response = await generateClass(formState as GenerateClassInput);
      const newClass: AIClass = {
        id: `${formState.subject}-${Date.now()}`,
        ...formState as Omit<GenerateClassInput, 'id'>,
        ...response,
      };
      addClass(newClass);
      setProgress(100);
      toast({
        title: "Class Published!",
        description: `The class "${formState.topic}" has been added.`,
      });
    } catch (error) {
      console.error('Error generating class:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not generate the class.",
      });
    } finally {
      clearInterval(interval);
      setIsLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const handlePreview = async () => {
    setIsPreviewing(true);
    setPreviewProgress(0);
    setPreviewResult(null);

    const interval = setInterval(() => {
        setPreviewProgress(prev => {
            if (prev >= 90) {
                clearInterval(interval);
                return prev;
            }
            return prev + 10;
        });
    }, 300);

    try {
      const response = await generateClass(formState as GenerateClassInput);
      setPreviewResult(response);
      setPreviewProgress(100);
    } catch (error) {
      console.error("Error generating preview:", error);
      toast({
        variant: "destructive",
        title: "Preview Failed",
        description: "Could not generate the class preview.",
      });
    } finally {
        clearInterval(interval);
    }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Create AI Class</CardTitle>
            <CardDescription>Fill in the details, and our AI will generate an animated lesson.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formState.subject} onValueChange={handleSelectChange('subject')}><SelectTrigger id="subject"><SelectValue placeholder="Select Subject" /></SelectTrigger><SelectContent><SelectItem value="maths">Maths</SelectItem><SelectItem value="science">Science</SelectItem><SelectItem value="english">English</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="class-level">Class</Label>
                <Select value={formState.classLevel} onValueChange={handleSelectChange('classLevel')}><SelectTrigger id="class-level"><SelectValue placeholder="Select Class" /></SelectTrigger><SelectContent>{[...Array(12)].map((_,i) => <SelectItem key={i} value={`${i+1}`}>{i+1}</SelectItem>)}</SelectContent></Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="chapter">Chapter Name</Label>
                <Input id="chapter" placeholder="e.g., Photosynthesis" value={formState.chapter} onChange={(e) => handleInputChange('chapter', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Topic Name</Label>
                <Input id="topic" placeholder="e.g., Light Reactions" value={formState.topic} onChange={(e) => handleInputChange('topic', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Select value={formState.difficulty} onValueChange={handleSelectChange('difficulty')}><SelectTrigger id="difficulty"><SelectValue placeholder="Select Level" /></SelectTrigger><SelectContent><SelectItem value="basic">Basic</SelectItem><SelectItem value="medium">Medium</SelectItem><SelectItem value="advanced">Advanced</SelectItem></SelectContent></Select>
              </div>
               <div className="space-y-2">
                <Label htmlFor="teaching-style">Teaching Style</Label>
                <Select value={formState.teachingStyle} onValueChange={handleSelectChange('teachingStyle')}><SelectTrigger id="teaching-style"><SelectValue placeholder="Select Style" /></SelectTrigger><SelectContent>
                    <SelectItem value="board"><PenLine className="inline-block mr-2 h-4 w-4" />Board Teaching</SelectItem>
                    <SelectItem value="conceptual"><Zap className="inline-block mr-2 h-4 w-4" />Conceptual</SelectItem>
                    <SelectItem value="story"><Book className="inline-block mr-2 h-4 w-4" />Story-based</SelectItem>
                    <SelectItem value="diagram"><Palette className="inline-block mr-2 h-4 w-4" />Diagram-based</SelectItem>
                    <SelectItem value="practical"><HelpingHand className="inline-block mr-2 h-4 w-4" />Practical Example</SelectItem>
                </SelectContent></Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="explanation">Explanation Input</Label>
              <Textarea id="explanation" placeholder="Enter explanation text, steps, definitions, examples, formulas, and common mistakes..." rows={12} value={formState.explanation} onChange={(e) => handleInputChange('explanation', e.target.value)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="keywords">Important Keywords</Label>
                    <Input id="keywords" placeholder="e.g., Chlorophyll, Stomata" value={formState.keywords} onChange={(e) => handleInputChange('keywords', e.target.value)} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="voice-style">Voice Style</Label>
                    <Select value={formState.voiceStyle} onValueChange={handleSelectChange('voiceStyle')}><SelectTrigger id="voice-style"><SelectValue placeholder="Select Voice" /></SelectTrigger><SelectContent>
                        <SelectItem value="teacher"><Mic className="inline-block mr-2 h-4 w-4"/>Normal Teacher</SelectItem>
                        <SelectItem value="friendly"><Mic className="inline-block mr-2 h-4 w-4"/>Friendly</SelectItem>
                        <SelectItem value="strict"><Mic className="inline-block mr-2 h-4 w-4"/>Strict</SelectItem>
                        <SelectItem value="energetic"><Mic className="inline-block mr-2 h-4 w-4"/>Energetic</SelectItem>
                        <SelectItem value="calm"><Mic className="inline-block mr-2 h-4 w-4"/>Calm</SelectItem>
                        <SelectItem value="hindi-english"><Mic className="inline-block mr-2 h-4 w-4"/>Hindi-English Mix</SelectItem>
                    </SelectContent></Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="board-color">Board Color</Label>
                    <Select value={formState.boardColor} onValueChange={handleSelectChange('boardColor')}><SelectTrigger id="board-color"><SelectValue placeholder="Select Color" /></SelectTrigger><SelectContent>
                        <SelectItem value="auto">AI Auto Pick</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                    </SelectContent></Select>
                </div>
            </div>
            
            <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={handlePreview} disabled={isLoading || isPreviewing} className="relative w-28">
                     {isPreviewing && !previewResult && (
                        <div className="absolute inset-0 flex items-center justify-center">
                             <Progress value={previewProgress} className="h-full w-full" />
                             <span className="absolute text-primary-foreground text-sm font-bold">{previewProgress}%</span>
                        </div>
                    )}
                    <span className={isPreviewing && !previewResult ? 'opacity-0' : 'opacity-100'}>
                        {isPreviewing && !previewResult ? '' : 'Preview'}
                    </span>
                </Button>
                <Button onClick={handlePublish} disabled={isLoading || isPreviewing} className="relative">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                             <Progress value={progress} className="h-full w-full" />
                             <span className="absolute text-primary-foreground text-sm font-bold">{progress}%</span>
                        </div>
                    )}
                    <span className={isLoading ? 'opacity-0' : 'opacity-100'}>Publish Class</span>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="flex flex-col items-center justify-center text-center p-6 bg-muted/30">
          <Tv className="w-10 h-10 text-primary/80 mb-3"/>
          <CardTitle className="text-lg">AI Class Preview</CardTitle>
          {isPreviewing && !previewResult ? (
            <>
              <CardDescription className="text-xs">Generating preview...</CardDescription>
              <Skeleton className="w-full aspect-video mt-4" />
            </>
          ) : (
             <>
              <CardDescription className="text-xs">A preview of the generated class will appear here.</CardDescription>
              <Skeleton className="w-full aspect-video mt-4" />
            </>
          )}
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Diagram Generator</CardTitle>
                <CardDescription>Upload or describe a diagram for the AI.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-8 text-center border-2 border-dashed rounded-lg">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Upload sketch or image</p>
                </div>
                <Textarea placeholder="Or describe the diagram here... e.g., 'A diagram of a plant cell with labels for nucleus, cytoplasm, and cell wall.'" />
                <ComingSoonBadge styleType="D">AI Diagram Engine</ComingSoonBadge>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example Problem Generator</CardTitle>
            <CardDescription>The AI will animate the solution step-by-step.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="Enter the question..." rows={2} />
            <Textarea placeholder="Enter the answer and steps..." rows={4} />
            <ComingSoonBadge styleType="D">AI Animated Solution</ComingSoonBadge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>MCQ Generator</CardTitle>
            <CardDescription>AI will generate questions from your summary.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="Paste a 1-paragraph summary here..." rows={4} />
            <ComingSoonBadge styleType="E">Generate MCQs</ComingSoonBadge>
          </CardContent>
        </Card>
      </div>

       {previewResult && (
        <AlertDialog open={!!previewResult} onOpenChange={(open) => { if (!open) { setPreviewResult(null); setIsPreviewing(false); setPreviewProgress(0); }}}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Generated Lesson Plan Preview</AlertDialogTitle>
              <AlertDialogDescription className="whitespace-pre-wrap font-mono text-xs max-h-[60vh] overflow-auto">
                {previewResult.lessonPlan}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => { setPreviewResult(null); setIsPreviewing(false); setPreviewProgress(0); }}>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}


export default function AdminPage() {
  return (
    <div className="space-y-8">
      <AdminHeader />
      
      <Tabs defaultValue="content" className="w-full">
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
            
            <TabsContent value="analytics">
              <TeacherAnalyticsDashboard />
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
