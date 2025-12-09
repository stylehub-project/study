'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Settings, User } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { ADMIN_NAV_LINKS, NAV_LINKS } from '@/lib/constants';
import { ComingSoonBadge } from '../ui/coming-soon-badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AppSidebar() {
  const pathname = usePathname();
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar-1');

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h1 className="text-lg font-bold font-headline whitespace-nowrap group-data-[collapsible=icon]:hidden">
            Sunrise Study Club
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {NAV_LINKS.map((link) => (
            <SidebarMenuItem key={link.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href}
                tooltip={link.name}
              >
                <Link href={link.href}>
                  <link.icon />
                  <span>{link.name}</span>
                  {link.comingSoon && <ComingSoonBadge styleType='A'>✍️</ComingSoonBadge>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <SidebarSeparator />
        <SidebarMenu>
          {ADMIN_NAV_LINKS.map((link) => (
            <SidebarMenuItem key={link.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(link.href)}
                tooltip={link.name}
              >
                <Link href={link.href}>
                  <link.icon />
                  <span>{link.name}</span>
                   {link.comingSoon && <ComingSoonBadge styleType='A'>✍️</ComingSoonBadge>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith('/profile')} tooltip="Profile">
              <Link href="/profile">
                <Avatar className="w-6 h-6">
                  {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User avatar" />}
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
