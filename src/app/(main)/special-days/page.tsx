
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Uploader } from "@/components/ui/uploader";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PartyPopper } from "lucide-react";

export default function SpecialDaysPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Special Days & Events</h1>
        <p className="mt-2 text-muted-foreground">Manage posters, videos, and templates for upcoming functions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Upload Event Media</CardTitle>
              <CardDescription>Add the assets for your next event. These will be displayed to all users.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Event Poster</h3>
                <Uploader />
              </div>
               <div>
                <h3 className="font-semibold mb-2">Event Video</h3>
                <Uploader />
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-2">Document Templates (e.g., for competitions)</h3>
                <Uploader />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <PartyPopper className="text-primary"/>
                        Upcoming Events
                    </CardTitle>
                    <CardDescription>A preview of upcoming events will be shown here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                            <Skeleton className="h-14 w-14 rounded-md" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-24" />
                            </div>
                        </div>
                    ))}
                    <div className="text-center pt-2">
                        <ComingSoonBadge styleType="A">Event calendar view</ComingSoonBadge>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
