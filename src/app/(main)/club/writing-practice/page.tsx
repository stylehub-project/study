'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Book, Bot, PenSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function NewsArticleDisplay() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>This Week's Topic: The Future of Urban Gardening</CardTitle>
                <CardDescription>Published on Sunday. Deadline for submission is next Sunday.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <article className="prose prose-invert max-w-none text-card-foreground/80">
                    <p>Community gardens are blossoming in cities worldwide, transforming unused urban spaces into vibrant hubs of food production and social connection. From rooftop farms to vertical gardens on skyscrapers, these green initiatives are not just about growing vegetables; they're about cultivating a more sustainable and resilient future for urban populations.</p>
                    <p>Experts believe this trend could significantly impact food security, reduce carbon footprints, and improve mental well-being for city dwellers. As technology evolves, we may soon see AI-managed gardens and hydroponic systems become commonplace in our concrete jungles.</p>
                </article>
                <Card className="bg-primary/10 border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-base text-primary font-semibold">Note from Your Teacher</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-primary/90">"Focus on using strong, descriptive words. Try to explain the 'why' behind urban gardening's benefits. Speak clearly and imagine you are presenting to the whole school!"</p>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default function WritingPracticePage() {
    const [wordCount, setWordCount] = useState(0);
    const [isWriting, setIsWriting] = useState(false);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(Boolean);
        setWordCount(words.length);
    }
    
    if (!isWriting) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <NewsArticleDisplay />
                </div>
                <div className="space-y-4 lg:sticky lg:top-24">
                    <Button size="lg" className="w-full" onClick={() => setIsWriting(true)}>
                        <PenSquare className="mr-2" /> Start Writing Practice
                    </Button>
                    <Card className="text-center p-6">
                        <p className="text-muted-foreground">After writing, you'll proceed to the video recording stage.</p>
                    </Card>
                </div>
            </div>
        )
    }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
       <div>
            <h1 className="text-4xl font-bold font-headline">Writing Practice</h1>
            <p className="text-muted-foreground">Draft your news report script here.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
                <Card className="relative p-2 bg-[hsl(var(--card)/0.9)]" style={{
                    backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                                    linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px),
                                    repeating-linear-gradient(to bottom, transparent, transparent 23px, hsl(var(--card-foreground)/0.1) 24px, hsl(var(--card-foreground)/0.1) 24px)`,
                    backgroundSize: '100% 100%, 100% 100%, 100% 24px'
                }}>
                    <Textarea 
                        placeholder="Start writing your news report..."
                        className="bg-transparent border-0 focus-visible:ring-0 resize-none leading-6 text-base min-h-[500px]"
                        onChange={handleTextChange}
                    />
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">AI Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="grammar-assist">Grammar Assist</Label>
                            <Switch id="grammar-assist" disabled />
                        </div>
                        <Button variant="outline" className="w-full" disabled>
                            <Book className="mr-2 h-4 w-4" /> Explain to me
                        </Button>
                        <Button variant="outline" className="w-full" disabled>
                            <Bot className="mr-2 h-4 w-4"/> Rewrite for a 10 y/o
                        </Button>
                        <ComingSoonBadge styleType="A">Tools coming soon</ComingSoonBadge>
                    </CardContent>
                </Card>
                <Card className="text-center p-4">
                    <p className="text-lg font-bold">{wordCount}</p>
                    <p className="text-sm text-muted-foreground">Words</p>
                </Card>
                 <Button size="lg" className="w-full" asChild>
                    <Link href="/club/recording">Next: Record Video</Link>
                </Button>
            </div>
        </div>
    </div>
  );
}
