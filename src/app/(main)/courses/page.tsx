import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";

function FilterPane() {
  return (
    <Card className="hidden lg:block sticky top-24">
      <CardHeader>
        <h3 className="text-xl font-bold">Filters</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Select disabled>
                <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                </SelectTrigger>
            </Select>
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Select disabled>
                <SelectTrigger>
                    <SelectValue placeholder="Any Level" />
                </SelectTrigger>
            </Select>
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
             <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-10" />
             </div>
        </div>
        <Button disabled className="w-full">Apply Filters</Button>
        <div className="text-center pt-4">
            <ComingSoonBadge styleType="E">✍️ Smart Filters Coming Soon</ComingSoonBadge>
        </div>
      </CardContent>
    </Card>
  )
}


export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
      <div className="lg:col-span-3 space-y-8">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-4xl font-bold font-headline">Courses</h1>
                <Skeleton className="h-4 w-64 mt-3" />
            </div>
            <Button variant="outline" className="gap-2">
                <SlidersHorizontal />
                <span>Filters</span>
                <div className="hidden lg:block"><ComingSoonBadge styleType="C"></ComingSoonBadge></div>
            </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Link href={`/courses/${i+1}`} key={i}>
                <Card className="group flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-2 bg-primary group-hover:bg-primary/80 transition-colors" />
                    <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                    <CardContent className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                    <div className="p-4 text-center">
                        <ComingSoonBadge styleType="C">Details...</ComingSoonBadge>
                    </div>
                </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <FilterPane />
      </div>
    </div>
  );
}
