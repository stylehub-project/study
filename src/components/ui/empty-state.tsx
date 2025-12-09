import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComingSoonBadge } from "./coming-soon-badge";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card } from "./card";

type EmptyStateProps = {
  image: ImagePlaceholder;
  title: string;
  description: string;
  comingSoonStyle: "A" | "B" | "C" | "D" | "E";
  comingSoonText: string;
};

export function EmptyState({ image, title, description, comingSoonStyle, comingSoonText }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-8 shadow-lg">
      <Image 
        src={image.imageUrl} 
        alt={image.description} 
        width={200} 
        height={200} 
        className="opacity-75 rounded-lg"
        data-ai-hint={image.imageHint}
      />
      <h3 className="mt-6 text-2xl font-bold font-headline text-card-foreground">{title}</h3>
      <p className="mt-2 max-w-md text-muted-foreground">{description}</p>
      <div className="mt-6">
        <ComingSoonBadge styleType={comingSoonStyle}>{comingSoonText}</ComingSoonBadge>
      </div>
    </Card>
  );
}
