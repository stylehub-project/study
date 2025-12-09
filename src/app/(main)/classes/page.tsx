import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Beaker, BookText, Globe, Laptop, Leaf, Sigma } from "lucide-react";
import Link from "next/link";

const subjects = [
    { name: "Science", icon: Beaker, href: "/classes/science" },
    { name: "Maths", icon: Sigma, href: "/classes/maths" },
    { name: "English", icon: BookText, href: "/classes/english" },
    { name: "EVS", icon: Leaf, href: "/classes/evs" },
    { name: "Social Studies", icon: Globe, href: "/classes/social-studies" },
    { name: "Computer", icon: Laptop, href: "/classes/computer" },
];

const comingSoonFeatures = [
    { title: "Class Notes", style: "bg-white/90 border border-gray-300 shadow-lg p-6 rounded-lg text-center relative before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-red-400 before:opacity-50 after:absolute after:left-5 after:top-0 after:h-full after:w-px after:bg-red-400 after:opacity-50", text: "✍️ Coming Soon" },
    { title: "Homework Helper", style: "bg-yellow-200/90 border border-yellow-300 shadow-xl p-6 rounded-lg text-center -rotate-3", text: "✍️ Coming Soon" },
    { title: "Games for Learning", style: "bg-gray-800 border-2 border-dashed border-green-400 shadow-2xl p-6 rounded-lg text-center", text: "✍️ Coming Soon" }
];

export default function ClassesPage() {
  return (
    <div className="space-y-12">
       <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">AI Animated Classes</h1>
        <p className="mt-2 text-muted-foreground">Select a subject to start learning with our AI teachers.</p>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {subjects.map((subject) => (
                <Link href={subject.href} key={subject.name}>
                    <Card className="group aspect-square flex flex-col items-center justify-center text-center p-4 transition-all hover:bg-card/80 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 bg-card/60">
                        <subject.icon className="w-12 h-12 md:w-16 md:h-16 text-primary/80 group-hover:text-primary transition-colors" />
                        <CardTitle className="mt-4 text-base md:text-lg font-semibold">{subject.name}</CardTitle>
                    </Card>
                </Link>
            ))}
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {comingSoonFeatures.map((feature, index) => (
                <div key={index} className="flex justify-center items-center">
                    <div className={cn("w-full max-w-sm", feature.style)}>
                        <h3 className={cn("font-bold font-headline mb-2", feature.title === "Games for Learning" && "text-green-400 font-mono")}>{feature.title}</h3>
                        <p className={cn("text-sm", feature.title === "Games for Learning" && "text-green-500/80 animate-pulse")}>{feature.text}</p>
                    </div>
                </div>
            ))}
       </div>
    </div>
  );
}
