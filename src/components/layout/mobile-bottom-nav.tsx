'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MOBILE_NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ComingSoonBadge } from '../ui/coming-soon-badge';

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-t-primary/20 bg-background/80 backdrop-blur-sm md:hidden">
      <nav className="flex items-center justify-around h-16">
        {MOBILE_NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-md text-xs font-medium relative",
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <link.icon className="h-6 w-6" />
              <span className="text-xs">{link.name}</span>
              {link.comingSoon && (
                 <div className="absolute -top-0.5 -right-0.5">
                    <ComingSoonBadge styleType='A'>✍️</ComingSoonBadge>
                 </div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
