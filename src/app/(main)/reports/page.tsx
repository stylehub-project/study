import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";

export default function ReportsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Card className="max-w-lg p-8">
            <CardHeader>
                <CardTitle className="text-4xl font-bold font-headline">Reports &amp; Analytics</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6">Detailed progress reports and analytics are on their way.</p>
                <ComingSoonBadge styleType="E">Analytics arriving shortly.</ComingSoonBadge>
            </CardContent>
        </Card>
    </div>
  );
}
