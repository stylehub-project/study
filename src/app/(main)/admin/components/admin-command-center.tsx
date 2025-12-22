
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Activity, CheckSquare, Server, BrainCircuit, AlertTriangle, UserX, Send, Folder, Lock, LogOut, List, Siren } from "lucide-react";
import { FileUp, PenLine, Shield, Tv } from "lucide-react";

function SystemHealthMetrics() {
  const metrics = [
    { label: "Total Students", value: "245", icon: Users },
    { label: "Total Teachers", value: "15", icon: User },
    { label: "Active Today", value: "180", icon: Activity },
    { label: "Suspended Accounts", value: "2", icon: UserX },
    { label: "Pending Tasks", value: "8", icon: CheckSquare },
    { label: "Server Usage", value: "75%", icon: Server },
    { label: "AI Usage Stats", value: "1.2k calls", icon: BrainCircuit },
    { label: "Error Logs", value: "3 Critical", icon: AlertTriangle, className: "text-destructive" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {metrics.map(metric => (
        <Card key={metric.label} className="p-4 text-center bg-card/50 border-primary/10 hover:border-primary/30 transition-all">
          <metric.icon className={`w-8 h-8 ${metric.className || 'text-primary/80'} mx-auto mb-2`} />
          <p className="text-2xl font-bold">{metric.value}</p>
          <p className="text-xs text-muted-foreground">{metric.label}</p>
        </Card>
      ))}
    </div>
  )
}

function QuickActionsBar() {
    const actions = [
        { label: "Suspend User", icon: UserX },
        { label: "Send Announcement", icon: Send },
        { label: "Search Any Data", icon: Search },
        { label: "View User Files", icon: Folder },
        { label: "Emergency Lockdown", icon: Lock, variant: "destructive" },
        { label: "Approve Submissions", icon: CheckSquare },
        { label: "Force Logout All", icon: LogOut },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Admin Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
                {actions.map(action => (
                    <Button key={action.label} variant={(action.variant as "destructive" | "outline") || "outline"} className="flex-1 min-w-[150px]" disabled>
                        <action.icon className="mr-2 h-4 w-4" />
                        {action.label}
                    </Button>
                ))}
            </CardContent>
        </Card>
    );
}

function RealTimeActivityFeed() {
    const activities = [
        { text: "Student A uploaded assignment 'Maths Homework'.", icon: FileUp },
        { text: "Teacher B created a new class topic 'Photosynthesis'.", icon: PenLine },
        { text: "AI flagged suspicious behaviour for review in News Club.", icon: Shield },
        { text: "Video under evaluation for 'Student C'.", icon: Tv },
        { text: "New user 'Student D' registered for Class 10.", icon: User },
    ];
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><List /> Real-Time Activity Feed</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="p-2 bg-muted rounded-full">
                                <activity.icon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="text-sm text-muted-foreground pt-1">{activity.text}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

function WarningAndAlertHub() {
    const alerts = [
        { text: "High server load detected on auth service.", level: "warning" },
        { text: "AI detected potential plagiarism in 2 submissions.", level: "critical" },
        { text: "Spamming activity detected from user 'spambot_123'.", level: "warning" },
        { text: "AI-flagged inappropriate content in News Club video.", level: "critical" },
    ];
    return (
        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive"><Siren /> Warning & Alert Hub</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="space-y-3">
                    {alerts.map((alert, i) => (
                        <li key={i} className={`flex items-center gap-3 p-3 rounded-md ${alert.level === 'critical' ? 'bg-destructive/20' : 'bg-yellow-500/20'}`}>
                            <AlertTriangle className={`w-5 h-5 ${alert.level === 'critical' ? 'text-destructive' : 'text-yellow-600'}`} />
                            <p className="text-sm text-destructive-foreground/90">{alert.text}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export function AdminCommandCenter() {
    return (
        <div className="space-y-8">
            <SystemHealthMetrics />
            <QuickActionsBar />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RealTimeActivityFeed />
                <WarningAndAlertHub />
            </div>
        </div>
    )
}
