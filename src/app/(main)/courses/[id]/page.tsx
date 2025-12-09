import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = params.id;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          {['overview', 'lessons', 'materials', 'practice'].map((tab) => (
            <TabsContent value={tab} key={tab}>
              <Card>
                <CardContent className="p-12 text-center flex items-center justify-center min-h-[300px]">
                  <ComingSoonBadge styleType="F" className="text-4xl">
                    Content for {tab} coming soon...
                  </ComingSoonBadge>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
