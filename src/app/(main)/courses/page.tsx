import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function CoursesPage() {
  const courseImages = PlaceHolderImages.filter(p => p.id.startsWith('course-card'));
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline text-foreground">
          Courses
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore our curriculum. New courses are added regularly.
        </p>
         <div className="mt-4 inline-block">
            <ComingSoonBadge styleType="C">Full course catalog launching soon!</ComingSoonBadge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden group">
            <CardHeader className="p-0 relative h-48 bg-muted/50">
               <ComingSoonBadge styleType="B" className="text-6xl">SOON</ComingSoonBadge>
            </CardHeader>
            <CardContent className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full mt-1" />
            </CardContent>
            <CardFooter className="p-4 pt-0">
               <Skeleton className="h-8 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
