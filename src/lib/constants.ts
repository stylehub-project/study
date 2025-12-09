import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  BookOpen,
  School,
  ClipboardList,
  Library,
  BarChart3,
  Users,
  User,
  Settings,
  Home,
  Upload,
  MessageSquare,
  Sun,
  GraduationCap,
  ClipboardCheck,
} from 'lucide-react';

export type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  comingSoon: boolean;
  label?: string;
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/', icon: Home, comingSoon: false },
  { name: 'Courses', href: '/courses', icon: BookOpen, comingSoon: true },
  { name: 'Classes', href: '/classes', icon: School, comingSoon: true },
  { name: 'Assignments', href: '/assignments', icon: ClipboardList, comingSoon: false },
  { name: 'Library', href: '/library', icon: Library, comingSoon: true },
  { name: 'Assessments', href: '/reports', icon: ClipboardCheck, comingSoon: true },
  { name: 'Club Zone', href: '/club', icon: Sun, comingSoon: false },
];

export const ADMIN_NAV_LINKS: NavLink[] = [
    { name: 'Admin', href: '/admin', icon: Settings, comingSoon: true },
]

export const MOBILE_NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/', icon: Home, comingSoon: false },
  { name: 'Upload', href: '/assignments', icon: Upload, comingSoon: false },
  { name: 'Messages', href: '/notifications', icon: MessageSquare, comingSoon: true },
  { name: 'Profile', href: '/profile', icon: User, comingSoon: false },
];
