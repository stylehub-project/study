import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Award, BarChart2, FileText, Send, Video } from "lucide-react";

export default function ClubPage() {
  return (
    <div className="space-y-8">
      <div className="relative p-8 rounded-lg bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-50 animate-pulse"></div>
        <div className="relative z-10">
            <h1 className="text-4xl font-bold font-headline text-primary">Sunrise News Club</h1>
            <p className="mt-2 text-foreground/80 max-w-xl mx-auto">
                Learn reporting. Improve speaking. Build confidence.
            </p>
        </div>
      </div>

       <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" variant="outline">
          <FileText className="mr-2 h-5 w-5" />
          This Week’s News
        </Button>
        <Button size="lg" variant="outline">
          <Video className="mr-2 h-5 w-5" />
          My Submissions
        </Button>
        <Button size="lg" variant="outline">
          <Send className="mr-2 h-5 w-5" />
          AI Feedback Reports
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <Card className="text-center flex flex-col items-center justify-center p-8">
            <BarChart2 className="w-12 h-12 text-primary/50 mb-4" />
            <h3 className="text-2xl font-bold font-headline">Leaderboard</h3>
            <div className="mt-4">
                <ComingSoonBadge styleType="E">Leaderboard Coming Soon</ComingSoonBadge>
            </div>
        </Card>
        <Card className="text-center flex flex-col items-center justify-center p-8">
            <Award className="w-12 h-12 text-primary/50 mb-4" />
            <h3 className="text-2xl font-bold font-headline">Badges & Rewards</h3>
            <div className="mt-4">
                <ComingSoonBadge styleType="E">Rewards System Coming Soon</ComingSoonBadge>
            </div>
        </Card>
      </div>
    </div>
  );
}
