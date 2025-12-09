import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle, Repeat, Target } from "lucide-react";

export default function ClassSummaryPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Lesson Summary: <span className="capitalize text-primary">{params.id}</span></h1>
        <p className="text-muted-foreground mt-2">Great work! Here's a recap of what you learned.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chapter Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-muted-foreground">Your Progress</span>
            <span className="font-bold text-primary">75%</span>
          </div>
          <Progress value={75} className="h-3" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Key Summary Points</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <Skeleton className="h-5 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Important Formulas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {[...Array(2)].map((_, i) => (
                <Card key={i} className="p-4 bg-muted/50">
                  <Skeleton className="h-8 w-3/4 mx-auto" />
                </Card>
             ))}
          </CardContent>
        </Card>
      </div>
      
      <Card>
          <CardHeader>
            <CardTitle>Diagram Recap</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Skeleton className="w-full max-w-md h-56" />
          </CardContent>
        </Card>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" className="gap-2">
            <Repeat />
            Explain Again in 1 Minute
        </Button>
        <Button className="gap-2">
            <Target />
            Take Quick Test
        </Button>
      </div>
    </div>
  );
}
