'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateClass, type GenerateClassInput, type GenerateClassOutput } from "@/ai/flows/generate-class-flow";
import { useContext, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { ClassContext, AIClass } from "@/context/ClassContext";
import { useToast } from "@/hooks/use-toast";
import { Book, Palette, Mic, PenLine, Tv, Zap, Upload, HelpingHand } from "lucide-react";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";

export function ContentUploadSystem() {
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
