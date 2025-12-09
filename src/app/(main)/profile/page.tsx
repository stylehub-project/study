import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Zap, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
       <h1 className="text-4xl font-bold font-headline text-center">Profile &amp; Settings</h1>

       <Card>
            <CardHeader>
                <CardTitle>Profile Setup</CardTitle>
                <CardDescription>This information helps us personalize your learning experience.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                        <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="club-member">Club Member</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="grade">Class/Grade</Label>
                    <Input id="grade" placeholder="e.g., 10th Grade" />
                </div>
                <div className="md:col-span-2 flex justify-end">
                    <Button>Save Profile</Button>
                </div>
            </CardContent>
       </Card>

        <Card>
            <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                 <CardDescription>Customize your app experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-card-foreground/5">
                    <div className="flex items-center gap-3">
                      <Zap className="text-primary" />
                      <Label htmlFor="focus-mode" className="font-bold">Focus Mode</Label>
                    </div>
                    <Switch id="focus-mode" disabled />
                </div>
                 <div className="flex justify-between items-center p-4 rounded-lg bg-card-foreground/5">
                    <div className="flex items-center gap-3">
                      <Moon className="text-primary" />
                      <Label htmlFor="night-mode" className="font-bold">Night Study Mode</Label>
                    </div>
                    <Switch id="night-mode" disabled />
                </div>
                 <div className="flex justify-between items-center p-4 rounded-lg bg-card-foreground/5">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-primary" />
                      <span className="font-bold">Parent Connect</span>
                    </div>
                    <Button variant="outline" disabled>Setup</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
