import { cn } from "@/lib/utils";

type ComingSoonBadgeProps = {
  styleType: "A" | "B" | "C" | "D" | "E" | "F";
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const styles = {
  A: "italic bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-medium shadow-sm -rotate-2", // Handwritten Tag
  B: "absolute inset-0 flex items-center justify-center text-8xl font-bold font-headline text-foreground/5 select-none pointer-events-none z-0", // Cinematic Static
  C: "bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md shadow-lg animate-pulse", // Interactive Tooltip (ribbon)
  D: "text-2xl font-bold font-headline text-primary/80 animate-pulse", // Chalkboard Flash
  E: "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse", // Holographic Floating
  F: "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary", // Liquid Fill (simplified)
};

export function ComingSoonBadge({ styleType, children, className, as: Component = 'span' }: ComingSoonBadgeProps) {
  const content = children || "✍️ Coming Soon";
  
  if (styleType === 'B') {
    return <div className={cn(styles.B, className)}>{content}</div>;
  }

  return (
    <Component className={cn(styles[styleType], className)}>
      {content}
    </Component>
  );
}
