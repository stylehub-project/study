// Using a client component to manage conditional field visibility
'use client'; 

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap } from "lucide-react";

export default function SignupPage() {
  const [role, setRole] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-background py-12">
      <Card className="mx-auto max-w-sm w-full">
         <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-primary" />
            </div>
          <CardTitle className="text-2xl font-bold font-headline">Join Sunrise Study Club</CardTitle>
          <CardDescription>Create your account to start your learning journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" placeholder="Max Robinson" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
             <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={setRole}>
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
            {role === 'club-member' && (
                <div className="grid gap-2">
                    <Label htmlFor="club-id">Club ID / Access Code</Label>
                    <Input id="club-id" placeholder="Enter your club access code" />
                </div>
            )}
             <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline text-primary">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
