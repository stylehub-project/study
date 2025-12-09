import { cn } from "@/lib/utils";
import React from "react";

type ComingSoonBadgeProps = {
  styleType: "A" | "B" | "C" | "D" | "E" | "F";
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const styles = {
    A: "italic bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-medium shadow-sm -rotate-2", // Handwritten Tag
    B: "absolute inset-0 flex items-center justify-center text-8xl font-bold font-headline text-foreground/5 select-none pointer-events-none z-0", // Cinematic Static
    C: "relative inline-block text-secondary text-xs font-mono animate-pulse", // Typewriter Cursor
    D: "text-2xl font-bold font-headline text-primary/80 animate-pulse", // Chalkboard Flash
    E: "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse", // Holographic Floating
    F: "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary", // Liquid Fill (simplified)
};

const TypewriterCursor = () => (
    <span className="ml-1 inline-block w-2 h-3 bg-secondary animate-blink" />
);

export function ComingSoonBadge({ styleType, children, className, as: Component = 'span' }: ComingSoonBadgeProps) {
  const defaultContent = {
    A: "✍️ Coming Soon",
    C: "✍️ Coming Soon...",
    D: "COMING SOON",
    E: "FEATURE COMING SOON",
  }[styleType] || "Coming Soon";

  const content = children || defaultContent;
  
  if (styleType === 'B') {
    return <div className={cn(styles.B, 'opacity-[0.02] [text-shadow:_0_0_10px_hsl(var(--foreground)/0.1)]', className)}>{content}</div>;
  }
  
  if (styleType === 'C') {
    return (
        <Component className={cn(styles[styleType], className)}>
            {content}
            <TypewriterCursor />
        </Component>
    )
  }

  return (
    <Component className={cn(styles[styleType], className)}>
      {content}
    </Component>
  );
}
