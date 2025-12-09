import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Play, Pause, FastForward, Rewind, MessageSquare, Brush, Palmtree, Bot, BookCheck } from "lucide-react";
import Link from "next/link";

function ConceptTimeline() {
  const steps = [
    { title: "Introduction", active: true },
    { title: "Key Formula", active: false },
    { title: "Visual Example", active: false },
    { title: "Solve a Problem", active: false },
    { title: "Quick Quiz", active: false },
  ];

  return (
    <Card className="w-64 flex-shrink-0 bg-background/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg font-headline">Concept Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.active ? "bg-primary" : "bg-muted"}`}>
                {step.active && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
              </div>
              <span className={`text-sm ${step.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                {step.title}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function BottomBar({ courseId }: { courseId: string }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl">
      <div className="bg-background/70 backdrop-blur-md rounded-full p-2 flex items-center justify-between shadow-2xl border border-primary/20">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full"><Rewind /></Button>
            <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground w-12 h-12"><Play /></Button>
            <Button variant="ghost" size="icon" className="rounded-full"><FastForward /></Button>
        </div>
        <div className="flex items-center gap-2">
             <ComingSoonBadge styleType="A">Explain Again</ComingSoonBadge>
             <ComingSoonBadge styleType="A">Draw Example</ComingSoonBadge>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 text-primary/80"><MessageSquare /></Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 text-primary/80"><Brush /></Button>
            <Button asChild variant="outline" size="icon" className="rounded-full border-secondary/50 text-secondary/80">
              <Link href={`/classes/${courseId}/summary`}>
                <BookCheck />
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}


export default function AIClassroomPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-[calc(100vh-8rem)] w-full flex gap-6 p-0 bg-transparent">
        {/* Main board */}
        <div className="flex-1 flex flex-col relative">
            <Card className="flex-1 bg-gray-900/50 border-primary/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-zinc-800/20 [mask-image:linear-gradient(to_bottom,white_0,white_75%,transparent_100%)]"></div>
                <ComingSoonBadge styleType="B">AI ANIMATED BOARD</ComingSoonBadge>
                <div className="text-center z-10">
                    <h2 className="text-3xl font-bold font-headline text-primary">Equations will animate here.</h2>
                    <p className="text-muted-foreground">Concepts appear like a teacher drawing live.</p>
                    <div className="mt-4">
                        <Skeleton className="w-64 h-32 mx-auto" />
                    </div>
                </div>
            </Card>
            
            {/* Teacher Assistant Bubble */}
            <div className="absolute bottom-20 left-6 flex items-end gap-3">
                 <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary" />
                 </div>
                 <div className="bg-card text-card-foreground p-3 rounded-lg rounded-bl-none shadow-lg max-w-xs">
                     <p className="text-sm font-semibold mb-1">AI Teacher</p>
                     <p className="text-xs text-muted-foreground">Let me break this down for you...</p>
                 </div>
            </div>

            <BottomBar courseId={params.id} />
        </div>

        {/* Right Panel */}
        <ConceptTimeline />
    </div>
  );
}
