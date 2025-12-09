'use client';

import { Bell, Languages, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ComingSoonBadge } from '../ui/coming-soon-badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export function Header() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar-1');

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b border-primary/20 bg-background/80 px-4 shadow-sm backdrop-blur-sm md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>

      <div className="hidden md:block relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <div className="w-full max-w-sm flex items-center gap-2">
            <span className="pl-8 text-sm text-muted-foreground">Search...</span>
            <ComingSoonBadge styleType="A" />
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Languages className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
          <div className="absolute -top-1 -right-1">
            <ComingSoonBadge styleType="C" />
          </div>
        </div>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="absolute -top-1 -right-1">
            <ComingSoonBadge styleType="C" />
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                 {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User avatar" />}
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background border-border">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
