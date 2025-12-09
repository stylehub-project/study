'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Camera, Sun, Moon, Sparkles, Mic, MonitorUp } from "lucide-react";
import { useState } from "react";

function VideoRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    
    return (
        <div className="aspect-[9/16] w-full max-w-md mx-auto bg-muted rounded-2xl overflow-hidden relative border-4 border-primary/50 shadow-2xl flex flex-col items-center justify-center">
            {/* Placeholder for video feed */}
            <div className="absolute inset-0 bg-background flex items-center justify-center">
                <Camera className="w-24 h-24 text-muted-foreground/50" />
            </div>

            {/* Visual Guidelines */}
            <div className="absolute top-8 left-4 right-4 text-center z-10">
                <div className="bg-black/50 text-white p-2 rounded-lg text-xs animate-pulse">
                    Look into the camera & speak clearly
                </div>
            </div>

            {/* Recording Indicator */}
            {isRecording && (
                 <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-white font-bold text-sm">REC</span>
                </div>
            )}

            {/* Countdown Overlay */}
            {/* Logic to show countdown would go here */}

            {/* Controls */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-center">
                 <Button size="icon" className="w-20 h-20 rounded-full" onClick={() => setIsRecording(!isRecording)}>
                    <div className={`w-8 h-8 rounded-full bg-destructive transition-all ${isRecording ? 'rounded-md' : ''}`}></div>
                </Button>
            </div>
        </div>
    );
}

function Teleprompter() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Teleprompter</CardTitle>
                    <Switch disabled />
                </div>
                <CardDescription>Your script will scroll here during recording.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="h-40 p-4 bg-muted rounded-md overflow-y-auto">
                    <p className="text-muted-foreground text-sm">Your script text will appear here. It will scroll automatically when you start recording. Adjust speed below.</p>
                </div>
                <div>
                    <Label>Scroll Speed</Label>
                    <Slider defaultValue={[50]} disabled />
                </div>
            </CardContent>
        </Card>
    )
}

export default function RecordingPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 flex justify-center">
            <VideoRecorder />
        </div>
        <div className="space-y-6 lg:sticky lg:top-24">
            <Card>
                <CardHeader>
                    <CardTitle>Recording Setup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <Label>Lighting Preset</Label>
                        <Select disabled>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a preset" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="studio"><Sparkles className="inline-block mr-2 h-4 w-4" /> Studio</SelectItem>
                                <SelectItem value="daylight"><Sun className="inline-block mr-2 h-4 w-4" /> Daylight</SelectItem>
                                <SelectItem value="lowlight"><Moon className="inline-block mr-2 h-4 w-4" /> Low Light</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <ComingSoonBadge styleType="A">Presets coming soon</ComingSoonBadge>
                </CardContent>
            </Card>

            <Teleprompter />
            
            <Card>
                <CardHeader>
                    <CardTitle>Submit Recording</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted">
                        <div className="flex items-center gap-2 text-muted-foreground"><Mic /> Volume Check</div>
                         <ComingSoonBadge styleType="C">Checking...</ComingSoonBadge>
                    </div>
                     <div className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted">
                        <div className="flex items-center gap-2 text-muted-foreground"><MonitorUp /> Clarity Check</div>
                         <ComingSoonBadge styleType="C">Checking...</ComingSoonBadge>
                    </div>
                    <Button size="lg" className="w-full" disabled>Submit for AI Feedback</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
