import { ComingSoonBadge } from '@/components/ui/coming-soon-badge';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-6 py-4 text-center text-xs text-muted-foreground">
      <p>
        &copy; {currentYear} Sunrise Study Club. All rights reserved.{' '}
        <ComingSoonBadge styleType="A" as="div" className="inline-block">Legal details</ComingSoonBadge>
      </p>
    </footer>
  );
}
